// const path = require('path');
import path from 'path';
// const { release, version } = require('os');
import {release, version} from 'os';
// const { createServer: createServerHttp } = require('http');
import {createServer as createServerHttp} from 'http';
import './files/c.js'

const random = Math.random();
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
export let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', {assert: {type: 'json'}});
} else {
    unknownObject = await import('./files/b.json', {assert: {type: 'json'}});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

