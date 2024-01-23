const { createReadStream, createWriteStream } = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { createGunzip } = require('zlib');

const zippedFile = path.join(__dirname, "files", "archive.gz");
const compressFile = path.join(__dirname, "files", "fileToCompress.txt");

const readStream = createReadStream(zippedFile);
const zipStream = createGunzip();
const writeStream = createWriteStream(compressFile) ;

const decompress = async () => {
  pipeline(
    readStream,
    zipStream,
    writeStream,
    (error) => {
      if (error) {
        console.log(error);
      }
    }
  )
};

decompress();