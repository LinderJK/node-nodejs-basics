import {fork} from 'child_process';
import path from "path";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  try {
    const child = fork(filePath, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

    child.stdout.on('data', (data) => {
      process.stdout.write(data.toString());
    })

    process.stdin.pipe(child.stdin);

  } catch (err) {
    console.error(err);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [2, 5, 6, 8]);
