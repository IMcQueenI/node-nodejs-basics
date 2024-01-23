const { createWriteStream } = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const writeStream = createWriteStream(pathToFile)

const write = async () => {
  process.stdin.pipe(writeStream);
};

write();