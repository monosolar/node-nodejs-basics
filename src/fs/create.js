import promises from 'node:fs/promises';
import fs from 'node:fs';

const create = async () => {
  const folderName = './src/fs/files';
  const fileName = 'fresh.txt';
  const path = `${folderName}/${fileName}`;
  const content = 'I am fresh and young';

  try {
    if (fs.existsSync(path)) {
      throw 'error';
    }

    await promises.writeFile(path, content);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
