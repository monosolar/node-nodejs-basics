import fs from 'node:fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const gzip = zlib.createGunzip();
  const readStream = fs.createReadStream(
    path.resolve(__dirname, './files/archive.gz'),
  );
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, './files/fileToCompress.txt'),
  );
  readStream.pipe(gzip).pipe(writeStream);
};

await decompress();
