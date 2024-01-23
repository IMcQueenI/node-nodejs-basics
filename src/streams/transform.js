const { Transform } = require('stream')

const reverseString = new Transform({
  transform(chunk, _, callback) {
    const string = chunk.toString().trim();
    const reverse = string.split("").reverse().join("");
    callback(null, reverse + "\n")
  }
})

const transform = async () => {
  process.stdin.pipe(reverseString).pipe(process.stdout);
};

transform();