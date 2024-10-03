import fs from "fs/promises";

const rename = async () => {
    try {
      await fs.access('./src/fs/files/wrongFilename.txt')
      await fs.access('./src/fs/files/properFilename.md')

      throw new Error('FS operation failed');

    } catch (err) {
      if (err.code === 'ENOENT') {
        if (err.path === './src/fs/files/wrongFilename.txt') {
          throw new Error('FS operation failed');
        }
        if (err.path === './src/fs/files/properFilename.md') {
          try {
            await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
            console.log('File renamed successfully!');
          } catch (renameErr) {
            console.error('Error during renaming:', renameErr);
          }
        }
      } else {
        console.error(err);
      }
    }
};

await rename();
