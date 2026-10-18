const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(process.cwd(), 'public/images');
const files = fs.readdirSync(dir);

async function optimize() {
  for (const file of files) {
    if (!file.endsWith('.webp') && !file.endsWith('.jpg')) continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Read buffer
    const buf = fs.readFileSync(filePath);
    const meta = await sharp(buf).metadata();
    
    let pipeline = sharp(buf);
    
    // Resize down if excessively large for web display
    if (meta.width && meta.width > 960) {
      pipeline = pipeline.resize({ width: 960, withoutEnlargement: true });
    }
    
    if (file.endsWith('.webp')) {
      const out = await pipeline.webp({ quality: 78, effort: 6 }).toBuffer();
      if (out.length < stat.size) {
        fs.writeFileSync(filePath, out);
        console.log(`Optimized ${file}: ${stat.size} -> ${out.length} bytes (${Math.round((stat.size - out.length)/1024)} KiB saved)`);
      }
    } else if (file.endsWith('.jpg')) {
      const out = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      if (out.length < stat.size) {
        fs.writeFileSync(filePath, out);
        console.log(`Optimized ${file}: ${stat.size} -> ${out.length} bytes`);
      }
    }
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
