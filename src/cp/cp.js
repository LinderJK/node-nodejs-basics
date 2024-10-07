import {fork} from 'child_process';
import path from "path";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  try {
    const child = fork(filePath, args);
    child.on('message', (message) => {
      console.log(message);
    });
    child.on('error', (err) => {
      console.error(err);
    });
    child.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Child process exited with code ${code}`);
      }
    });
  } catch (err) {
    console.error(err);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [2, 5, 6, 8]);
