import fs from 'fs/promises';

const copy = async () => {
    try {
      await fs.access('./src/fs/files')
      await fs.access('./src/fs/files_copy')

      throw new Error('FS operation failed');

    } catch (err) {
      if (err.code === 'ENOENT') {
        if (err.path === './src/fs/files') {
          throw new Error('FS operation failed');
        }
        if (err.path === './src/fs/files_copy') {
          await fs.mkdir('./src/fs/files_copy');
        }
      } else {
        console.error(err);
        return;
      }
    }

    try {
      await fs.cp('./src/fs/files', './src/fs/files_copy', {recursive: true});
    } catch (err) {
      console.error(err);
    }
};

await copy();
