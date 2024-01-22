const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files");

const list = async () => {
  try {
    const data = await fs.readdir(pathToFile);
    console.log(data);
  } catch (error) {
    console.log('FS operation failed');
  }
};

list();