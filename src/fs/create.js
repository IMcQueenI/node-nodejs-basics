const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.writeFile(pathToFile, 'I am fresh and young', { flag: "wx" });
  } catch (error) {
    console.log('FS operation failed');
  }
};

create();