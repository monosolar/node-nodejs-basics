import promises from 'node:fs/promises';
import fs from 'node:fs';

const remove = async () => {
  const folderName = './src/fs/files';
  const fileName = 'fileToRemove.txt';
  const path = `${folderName}/${fileName}`;

  try {
    if (!fs.existsSync(path)) {
      throw 'error';
    }

    await promises.unlink(path);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
