import fs from "fs/promises";
import path from "path";

const remove = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filePath);
        await fs.rm(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await remove();
