const { createReadStream, createWriteStream } = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { createGzip } = require('zlib');

const compressFile = path.join(__dirname, "files", "fileToCompress.txt");
const zippedFile = path.join(__dirname, "files", "archive.gz");

const readStream = createReadStream(compressFile);
const zipStream = createGzip();
const writeStream = createWriteStream(zippedFile) ;

const compress = async () => {
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

compress();