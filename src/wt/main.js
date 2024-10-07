import { cpus } from 'os';
import {Worker} from 'worker_threads';
import path from "path";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    let n = 10;
    const cpu = cpus().length;

    const workers = Array.from({length: cpu}, (_,index) => {
    return new Promise((resolve,reject)=> {
      const worker = new Worker(filePath, {
        workerData: n + index
      })

      worker.on('message', (result) => {
        resolve({
          status: 'resolved',
          data: result
        });
      })
      worker.on('error', () => {
        resolve({
          status: 'error',
          data: null
        });
      })
      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({
            status: 'error',
            data: null
          })
        }
      })
    })
  })

  const results = await Promise.allSettled(workers);
  console.log(results);

};

await performCalculations();
