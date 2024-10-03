import fs from "fs/promises";
import path from "path";

const list = async () => {
  const __dirname = import.meta.dirname;
  const filesPath = path.join(__dirname, 'files');
    try {
        await fs.access(filesPath);
        const files = await fs.readdir(filesPath);
        console.log(files);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.error(err);
    }
};

await list();
