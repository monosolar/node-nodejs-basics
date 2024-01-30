import promises from 'node:fs/promises';
import fs from 'node:fs';

const rename = async () => {
  const folderName = './src/fs/files';
  const wrongFileName = 'wrongFilename.txt';
  const properFileName = 'properFilename.md';

  try {
    if (
      !fs.existsSync(`${folderName}/${wrongFileName}`) ||
      fs.existsSync(`${folderName}/${properFileName}`)
    ) {
      throw 'error';
    }

    await promises.rename(
      `${folderName}/${wrongFileName}`,
      `${folderName}/${properFileName}`,
    );
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
