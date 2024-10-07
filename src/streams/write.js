import { createWriteStream } from 'fs';
import path from 'path';

const write = async () => {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    try{
        const stream = createWriteStream(filePath , {encoding: 'utf8'});
        process.stdin.pipe(stream);
        stream.on("open", () => {
          console.log("Use CTRL + D to stop writing to file");
        });
        stream.on("error", (err) => {
            console.error("Error writing file", err);
        })
        stream.on("finish", () => {
            console.log("\n File written successfully");
        });

    } catch (err) {
        console.error(err);
    }
};

await write();