import crypto from 'crypto';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  fs.createReadStream(
    path.resolve(__dirname, './files/fileToCalculateHashFor.txt'),
  )
    .on('data', (data) => {
      hash.update(data);
    })
    .on('end', () => {
      const fileHash = hash.digest('hex');
      console.log('Hash:', fileHash);
    })
    .on('error', (error) => {
      console.log('Error:', error?.message);
    });
};

await calculateHash();
