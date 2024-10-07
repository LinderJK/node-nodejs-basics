import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import fs from 'fs/promises';
const compress = async () => {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, 'files', 'fileToCompress1.txt');
    const outputFilePath = path.join(__dirname, "files", "archive.gz");

    try {
        await fs.access(filePath);
        const gzip = createGzip();
        const input = createReadStream(filePath);
        const output = createWriteStream(outputFilePath);
        input.pipe(gzip).pipe(output);

    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await compress();
