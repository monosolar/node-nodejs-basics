import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  fs.createReadStream(path.resolve(__dirname, './files/fileToRead.txt'))
    .pipe(process.stdout)
    .on('data', function () {
      this.destroy();
    });
};

await read();
