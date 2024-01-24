const path = require('path');
const { fork } = require('child_process');

const pathToFile = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(pathToFile, args);
};

spawnChildProcess( [3123, 'gerghesh', 2434]);