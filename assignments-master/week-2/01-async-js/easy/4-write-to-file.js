// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

// Data to be written to the file
const content = 'Hello, this is the content of the file.';

fs.writeFile('dummyData.txt', content, 'utf-8', (err) => {
    if (err) {
        console.log("🚀 ~ file: 4-write-to-file.js:12 ~ fs.writeFile ~ err:", err);
    } else {
        console.log("file has been written ");
    }
});

console.log("🚀 ~  print hw after fs write");
