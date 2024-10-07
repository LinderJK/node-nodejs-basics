import { createGunzip } from 'zlib';
import path from 'path';
import fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, 'files', 'archive.gz');
    const outputFilePath = path.join(__dirname, "files", "fileToCompress.txt");

    try {
        await fs.access(filePath);
        const gunzip = createGunzip();
        const input = createReadStream(filePath);
        const output = createWriteStream(outputFilePath);
        input.pipe(gunzip).pipe(output);

    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await decompress();
