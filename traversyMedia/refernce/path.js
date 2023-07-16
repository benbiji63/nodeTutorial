const path = require('path'); //get base filename

// Base file name
//  console.log(__filename);
// console.log(path.basename(__filename));

// Directory name
// console.log(path.dirname(__filename));

// File extension
// console.log(path.extname(__filename));

// Create path object
// console.log(path.parse(__filename));

// Concatenate paths
// // add path like ../hai/hello.html
console.log(path.join(__dirname,'hai','hello.js'));
