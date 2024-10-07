import { cpus } from 'os';
import {Worker} from 'worker_threads';
import path from "path";

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    // Write your code here
};

await performCalculations();