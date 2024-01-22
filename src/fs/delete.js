const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(pathToFile);
  } catch (error) {
    console.log('FS operation failed');
  }
};

remove();