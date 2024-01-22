const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "wrongFilename.txt");
const pathToFileNew = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.rename(pathToFile, pathToFileNew);
  } catch (error) {
    console.log('FS operation failed');
  }
};

rename();