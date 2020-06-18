//Playing with the PATH Module
const path = require('path');

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create path Object
console.log(path.parse(__filename));

//Concatenation of Paths
//../test/doc.html

console.log(path.join(__dirname, 'test', 'doc.html'));
