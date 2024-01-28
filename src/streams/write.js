import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writeStream = fs.createWriteStream(
    path.resolve(__dirname, './files/fileToWrite.txt'),
  );

  process.stdin.pipe(writeStream);
};

await write();
