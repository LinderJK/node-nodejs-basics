import { Transform } from 'stream';
const transform = async () => {
    try {
        const transformStream = new Transform({
            transform(chunk, _, callback) {
                const reversed = chunk.toString().split('').reverse().join('') + '\n';
                callback(null, reversed);
            }
        });
        process.stdin.pipe(transformStream).pipe(process.stdout);
        transformStream.on('error', (err) => {
            console.error(err);
        })
    } catch (err) {
        console.error(err);
    }
};

await transform();
