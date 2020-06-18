const fs = require('fs');
const path = require('path');

//Create a folder on our system
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if(err) throw err;
//     console.log('Folder Created');
// });

//Create and Write in the file created

// fs.writeFile(path.join(__dirname, '/test', 'doc.txt'), 'This is docs', err => {
//     if(err) throw err;
//     console.log('File created and written');
//     //added in the callback since it is Async
//     //append
// fs.appendFile(path.join(__dirname, '/test', 'doc.txt'), ' and has a meaning', err => {
//     if(err) throw err;
//     console.log(' PLUS TEXT INSIDE');
// });
// });

//read File
// UTF8 is needed to encode the data read
// fs.readFile(path.join(__dirname, '/test', 'doc.txt'), 'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

//Rename a File 1st param is the old path and filename 2nd param is the new one
fs.rename(path.join(__dirname, '/test', 'doc.txt'), path.join(__dirname, '/test', 'doc-renew.txt'), (err) => {
    if(err) throw err;
    console.log('File Renamed');
});
