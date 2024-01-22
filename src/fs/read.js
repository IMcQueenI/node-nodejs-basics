const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(pathToFile);
    console.log(data.toString());
  } catch (error) {
    console.log('FS operation failed');
  }
};

read();