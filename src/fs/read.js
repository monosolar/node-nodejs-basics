import promises from 'node:fs/promises';
import fs from 'node:fs';

const read = async () => {
  const folderName = './src/fs/files';
  const fileName = 'fileToRead.txt';
  const path = `${folderName}/${fileName}`;

  try {
    if (!fs.existsSync(path)) {
      throw 'error';
    }

    const data = await promises.readFile(path, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
