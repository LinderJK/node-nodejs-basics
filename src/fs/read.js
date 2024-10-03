import fs from "fs/promises";
import path from "path";

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
   try {
       await fs.access(filePath);
       const data = await fs.readFile(filePath, 'utf8');
       console.log(data);
   }  catch (err) {
       if (err.code === 'ENOENT') {
           throw new Error('FS operation failed');
       }
       console.error(err);
   }
};

await read();
