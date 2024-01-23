const { createHash } = require('crypto');
const { readFile } = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const file = await readFile(pathToFile);
  const hash = createHash('sha256').update(file).digest('hex');
  console.log(hash);
};

calculateHash();