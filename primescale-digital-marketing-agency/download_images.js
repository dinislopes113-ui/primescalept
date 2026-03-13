import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const services = [
  {
    id: 'ads',
    prompt: 'High quality photography of a modern minimalist office desk with a subtle glowing lamp Soft natural lighting shallow depth of field blurred background No text No people'
  },
  {
    id: 'social',
    prompt: 'High quality photography of a modern minimalist office lounge area with a sleek coffee table Soft natural lighting shallow depth of field blurred background No text No people'
  },
  {
    id: 'strategy',
    prompt: 'High quality photography of a modern minimalist meeting room table with a closed elegant notebook Soft natural lighting shallow depth of field blurred background No text No people'
  },
  {
    id: 'leads',
    prompt: 'High quality photography of a modern minimalist office reception area with a sleek indoor plant Soft natural lighting shallow depth of field blurred background No text No people'
  },
  {
    id: 'web',
    prompt: 'High quality photography of a modern minimalist clean workspace with a closed sleek laptop Soft natural lighting shallow depth of field blurred background No text No people'
  }
];

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download, status code: ${res.statusCode}`));
        return;
      }
      const writeStream = fs.createWriteStream(filepath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        writeStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const service of services) {
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(service.prompt)}?width=800&height=600&nologo=true&seed=42`;
    const filepath = path.join(imagesDir, `${service.id}.jpg`);
    console.log(`Downloading ${service.id}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`Saved ${service.id}.jpg`);
    } catch (e) {
      console.error(`Error downloading ${service.id}:`, e);
    }
  }
}

main();
