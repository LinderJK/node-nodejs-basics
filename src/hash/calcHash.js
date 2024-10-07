import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
const calculateHash = async () => {
  try {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    if (!filePath) {
      throw new Error('FS operation failed');
    }
   const hash = createHash('sha256');
   const stream = createReadStream(filePath);
  
  stream.pipe(hash);
  hash.on('finish', () => {
    console.log(hash.read().toString('hex'));
  });


  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
