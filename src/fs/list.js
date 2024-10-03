import fs from "fs/promises";

const list = async () => {
    try {
        await fs.access('./src/fs/files');
        const files = await fs.readdir('./src/fs/files');
        console.log(files);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.error(err);
    }
};

await list();
