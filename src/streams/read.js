import { createReadStream } from 'fs';
import path from 'path';
const read = async () => {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, "files", "fileToRead.txt"); 
    try {
        const stream = createReadStream(filePath, {encoding: 'utf8'});
        stream.pipe(process.stdout);
        stream.on("end", () => {
           console.log("\n");
        });

        stream.on("error", (err) => {
          console.error("Error reading file", err);
        });
        
    } catch (err) {
        console.error(err);
    }
};

await read();