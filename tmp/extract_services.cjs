const fs = require("fs");
const file = fs.readFileSync("src/data/roofingData.ts", "utf8");
const services = [];
const lines = file.split("\n");
let cur = {};
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const mId = line.match(/^\s*id:\s*["']([^"']+)["']/);
  if (mId) cur.id = mId[1];
  const mSlug = line.match(/^\s*slug:\s*["']([^"']+)["']/);
  if (mSlug) cur.slug = mSlug[1];
  const mTitle = line.match(/^\s*title:\s*["']([^"']+)["']/);
  if (mTitle) cur.title = mTitle[1];
  const mImg = line.match(/^\s*localImage:\s*["']([^"']+)["']/);
  if (mImg) cur.localImage = mImg[1];
  const mBImg = line.match(/^\s*beforeImage:\s*["']([^"']+)["']/);
  if (mBImg) {
    cur.beforeImage = mBImg[1];
    services.push(cur);
    cur = {};
  }
}
console.log(JSON.stringify(services, null, 2));
