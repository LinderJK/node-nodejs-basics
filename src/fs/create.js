import fs from 'fs/promises';
const create = async () => {
    try {
      const files = await fs.readdir('./src/fs/files');
      for (const file of files) {
        if (file === 'fresh.txt') throw new Error('FS operation failed');
      }
      await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young');
      console.log('File created successfully');
    } catch (err) {
      console.error(err);
    }
};

await create();
