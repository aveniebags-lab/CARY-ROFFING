import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';
import { getAllStaticPageDescriptors, renderStaticPageHtml } from './src/seo/staticPageGenerator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Plugin to transform production CSS link to non-render-blocking preload + onload
function nonBlockingCss(): Plugin {
  return {
    name: 'vite-plugin-non-blocking-css',
    enforce: 'post',
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        '<link rel="preload" as="style" href="$1" crossorigin onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
      );
    },
  };
}

// Plugin to emit static pre-rendered .html files for all routes in dist/ and serve 200 OK in dev
function staticSeoPagesPlugin(): Plugin {
  const descriptors = getAllStaticPageDescriptors();
  const aliasMap = new Map<string, (typeof descriptors)[number]>();
  for (const desc of descriptors) {
    aliasMap.set(desc.canonicalSlug.toLowerCase(), desc);
    for (const alias of desc.aliases) {
      aliasMap.set(alias.toLowerCase(), desc);
    }
  }

  return {
    name: 'vite-plugin-static-seo-pages',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || (req.method !== 'GET' && req.method !== 'HEAD')) {
          return next();
        }
        const rawUrlPath = req.url.split('?')[0].split('#')[0];
        const cleanSlug = decodeURIComponent(rawUrlPath).replace(/^\/+|\/+$/g, '').trim();
        if (!cleanSlug || cleanSlug === 'index.html') {
          return next();
        }

        const matched = aliasMap.get(cleanSlug.toLowerCase());
        if (!matched) {
          return next();
        }

        try {
          const indexHtmlPath = path.resolve(__dirname, 'index.html');
          const rawTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
          const pageHtml = renderStaticPageHtml(rawTemplate, matched);
          const transformed = await server.transformIndexHtml(rawUrlPath, pageHtml);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(transformed);
        } catch (err) {
          next(err);
        }
      });
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const baseIndexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(baseIndexPath)) {
        return;
      }
      const baseHtml = fs.readFileSync(baseIndexPath, 'utf-8');

      for (const page of descriptors) {
        const renderedHtml = renderStaticPageHtml(baseHtml, page);
        for (const relOutPath of page.outputFiles) {
          const fullOutPath = path.join(distDir, relOutPath);
          fs.mkdirSync(path.dirname(fullOutPath), { recursive: true });
          fs.writeFileSync(fullOutPath, renderedHtml, 'utf-8');
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), nonBlockingCss(), staticSeoPagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'react-vendor';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
