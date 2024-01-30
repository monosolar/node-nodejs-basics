import promises from 'node:fs/promises';
import fs from 'node:fs';

const list = async () => {
  const folderName = './src/fs/files';

  try {
    if (!fs.existsSync(folderName)) {
      throw 'error';
    }

    const list = await promises.readdir(folderName);
    console.log(list.join('\n'));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
