// fs - file system
// read / write

const fs = require("fs/promises");

async function readandWrite() {
  setTimeout(() => {
    try {
      const data = fs.readFile("./example.txt", "utf-8");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, 5000);
}
readandWrite();
//
