// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

fs.readFile('dummyDataMed.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("🚀 ~ file: 1-file-cleaner.js:19 ~ fs.readFile ~ err:", err);
    }
    const writeData = data.replace(/\s{2,}/g, ' ').trim();
    fs.writeFile('dummyDataMed.txt', writeData, 'utf8', (err) => {
        if (err) {
            console.log("🚀 ~ file: 1-file-cleaner.js:24 ~ fs.writeFile ~ err:", err);
        }
        console.log("data has been written");
    })
});