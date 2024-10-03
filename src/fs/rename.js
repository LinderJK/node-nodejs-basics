import fs from "fs/promises";
import path from "path";

const rename = async () => {
    const __dirname = import.meta.dirname;
    const wrongFilenamePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFilenamePath = path.join(__dirname, 'files', 'wrongFilename.txt');

    try {
      await fs.access(wrongFilenamePath)
      await fs.access(properFilenamePath)

      throw new Error('FS operation failed');

    } catch (err) {
      if (err.code === 'ENOENT') {
        if (err.path === wrongFilenamePath) {
          throw new Error('FS operation failed');
        }
        if (err.path === properFilenamePath) {
          try {
            await fs.rename(wrongFilenamePath, properFilenamePath);
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
