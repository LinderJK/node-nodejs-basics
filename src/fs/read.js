import fs from "fs/promises";

const read = async () => {
   try {
       await fs.access('./src/fs/files/fileToRead.txt');
       const data = await fs.readFile('./src/fs/files/fileToRead.txt', 'utf8');
       console.log(data);
   }  catch (err) {
       if (err.code === 'ENOENT') {
           throw new Error('FS operation failed');
       }
       console.error(err);
   }
};

await read();
