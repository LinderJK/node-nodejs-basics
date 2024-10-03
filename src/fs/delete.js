import fs from "fs/promises";

const remove = async () => {
    try {
        await fs.access('./src/fs/files/fileToRemove.txt');
        await fs.rm('./src/fs/files/fileToRemove.txt');
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};

await remove();
