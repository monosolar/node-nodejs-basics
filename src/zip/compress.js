import fs from 'node:fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(
    path.resolve(__dirname, './files/fileToCompress.txt'),
  );
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, './files/archive.gz'),
  );
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
