const { Worker } = require('node:worker_threads');
const path = require('path');
const os = require('os');

const numWorkers = os.cpus().length;
const start = 10;
const pathToFile = path.join(__dirname, "worker.js");


const performCalculations = async () => {
  const results = [];

  const workers = Array.from({ length: numWorkers }, (_, i) => {
    const worker = new Worker(pathToFile, { workerData: start + i });

    return new Promise((resolve) => {
      worker.on('message', (message) => {
        results.push(message);
        resolve();
      });

      worker.on('error', () => {
        results.push({
          status: 'error',
          data: null,
        });
        resolve();
      });
    });
  });

  await Promise.all(workers);
  console.log(results);
};

performCalculations();