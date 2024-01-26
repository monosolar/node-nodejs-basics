import promises from 'node:fs/promises';
import fs from 'node:fs';

const copy = async () => {
  const folderName = './src/fs/files';
  const folderCopyName = './src/fs/files_copy';

  try {
    if (!fs.existsSync(folderName) || fs.existsSync(folderCopyName)) {
      throw 'error';
    }

    await promises.cp(folderName, folderCopyName, { recursive: true });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
