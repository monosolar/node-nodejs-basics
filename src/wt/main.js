import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWorker = (idx) =>
  new Promise((res, rej) => {
    const worker = new Worker(path.resolve(__dirname, './worker.js'), {
      workerData: 10 + idx,
    });
    worker.on('message', res);
    worker.on('error', rej);
  });

const performCalculations = async () => {
  const numCPUs = cpus().length;

  const rawResults = await Promise.allSettled(
    new Array(numCPUs).fill().map((_, idx) => createWorker(idx + 1)),
  );

  const results = rawResults.map(({ status, value: data }) => {
    const isFulfilled = status === 'fulfilled';

    return {
      status: isFulfilled ? 'resolved' : 'error',
      data: isFulfilled ? data : null,
    };
  });

  console.log(results);
};

await performCalculations();
