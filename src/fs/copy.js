const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files");
const pathToFileCopy = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(pathToFile, pathToFileCopy, { recursive: true, force: false, errorOnExist:true });
  } catch (error) {
    console.log('FS operation failed');
  }
};

copy();