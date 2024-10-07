import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const __dirname = import.meta.dirname;
    const freshFilePath = path.join(__dirname, 'files', 'fresh.txt');
    const filesPath = path.join(__dirname, 'files');
    try {
      const files = await fs.readdir(filesPath);
      for (const file of files) {
        if (file === 'fresh.txt') throw new Error('FS operation failed');
      }
      await fs.writeFile(freshFilePath, 'I am fresh and young');
      console.log('File created successfully');
    } catch (err) {
      console.error(err);
    }
};

await create();
