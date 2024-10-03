import { createHash } from 'crypto';
import { createReadStream } from 'fs';
const calculateHash = async () => {
  try {
    const file = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
    if (!file) {
      throw new Error('FS operation failed');
    }
   const hash = createHash('sha256');
   hash.on('readable', () => {
     const data = hash.read();
     if (data) {
       console.log(data.toString('hex'));
     }
   })
   hash.write(file);
   hash.end();
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
