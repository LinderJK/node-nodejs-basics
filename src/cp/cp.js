import {fork} from 'child_process';
import path from "path";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  try {
    const child = fork(filePath, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

    child.stdout.on('data', (data) => {
      process.stdout.write(`From child: ${data.toString()}\n`);
    })

    process.stdin.pipe(child.stdin);

    child.on('exit', (code) => {
      if (code !== 0) {
        process.exit(code);
      }
    });
    child.on('error', (err) => {
      console.error(err);
    });

  } catch (err) {
    console.error(err);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ['--some-arg', 'value1', '--other', '1337', '--arg2', '42'] );
