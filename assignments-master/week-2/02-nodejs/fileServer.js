// /**
//   You need to create an express HTTP server in Node.js which will handle the logic of a file server.
//   - Use built in Node.js `fs` module
//   The expected API endpoints are defined below,
//   1. GET /files - Returns a list of files present in `./files/` directory
//     Response: 200 OK with an array of file names in JSON format.
//     Example: GET http://localhost:3000/files
//   2. GET /file/:filename - Returns content of given file by name
//      Description: Use the filename from the request path parameter to read the file from `./files/` directory
//      Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
//      Example: GET http://localhost:3000/file/example.txt
//     - For any other route not defined in the server return 404
//     Testing the server - run `npm run test-fileServer` command in terminal
//  */
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();


// const directory = './files/';

// app.get('/files', async (req, res) => {
//   try {
//     const allFiles = await fs.readdirSync(directory);
//     res.status(200).send(allFiles);
//   } catch (error) {
//     console.log("🚀 ~ file: fileServer.js:30 ~ app.get ~ error:", error)
//     res.status(400).send(error.message);
//   }
// });

// app.get('/files/:file', async (req, res) => {
//   try {
//     const filePath = `${directory}/${req.params.file}`;
//     console.log("🚀 ~ file: fileServer.js:36 ~ app.get ~ getFileName:", filePath)
//     const data = await fs.readFileSync(filePath, 'utf8');
//     console.log("🚀 ~ file: fileServer.js:37 ~ app.get ~ data:", data);
//     res.status(200).send(data);
//   } catch (error) {
//     // res.status(400).send(error.message);

//     res.status(400).send("Nod data present --> " + error.message);
//   }
// })




// // 404 route for any other route not defined
// app.use((req, res) => {
//   res.status(404).send("Not Found!!!!");
// });




// app.listen(3003, () => {
//   console.log("app is listening at port 3003");
// })


// module.exports = app;



const express = require('express');
const fs = require('fs').promises;  // Use fs.promises for async file operations
const path = require('path');
const app = express();

const directory = './files/';

app.get('/files', async (req, res) => {
  try {
    const allFiles = await fs.readdir(directory);
    res.status(200).json(allFiles);
  } catch (error) {
    console.log("Error reading files:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/files/:file', async (req, res) => {
  try {
    const filePath = path.join(directory, req.params.file);
    const data = await fs.readFile(filePath, 'utf8');
    res.status(200).send(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).send('File not found');
    } else {
      console.log("Error reading file:", error);
      res.status(500).send("Internal Server Error");
    }
  }
});

// 404 route for any other route not defined
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3003, () => {
  console.log("app is listening at port 3003");
});

module.exports = app;
