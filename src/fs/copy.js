import fs from 'fs/promises';
import path from "path";

const copy = async () => {
    const __dirname = import.meta.dirname;
    const filesPath = path.join(__dirname, 'files');
    const filesCopyPath = path.join(__dirname, 'files_copy');
    try {
      await fs.access(filesPath)
      await fs.access(filesCopyPath)

      throw new Error('FS operation failed');

    } catch (err) {
      if (err.code === 'ENOENT') {
        if (err.path === filesPath) {
          throw new Error('FS operation failed');
        }
        if (err.path === filesCopyPath) {
          await fs.mkdir(filesCopyPath);
        }
      } else {
        console.error(err);
        return;
      }
    }

    try {
      await fs.cp(filesPath, filesCopyPath, {recursive: true});
    } catch (err) {
      console.error(err);
    }
};

await copy();
