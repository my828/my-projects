var http = require('http');
//include file system module
var fs = require('fs');


http.createServer(function (req, res) {
  fs.readFile('demo1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //read file
    res.write(data);
    res.end();
  });
}).listen(8080);

/* 
    Create files:
    -fs.qppendFile() method appends specified content to a file, create file if not exist yet. (Update also)
    -fs.open() method takes a "flag" as the second argument, if flag is 'w' for 'writing' the specified file is opened for writing. New file created if not exist. 
    -fs.writeFile() method replaces specified file and content if it exists. If not exist then a new file and content will be created. (Update also)
*/

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('saved!');
}) 

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  /*
    Delete Files:
    -fs.unlink() method deletes specified file
   */
  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  /*
    Rename files: 
    -fs.rename() 
  */
 fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });