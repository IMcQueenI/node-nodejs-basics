const { createReadStream } = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const readStream = createReadStream(pathToFile)

const read = async () => {
  readStream.pipe(process.stdout);
};

read();