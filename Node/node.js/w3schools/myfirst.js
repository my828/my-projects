//include a module
var http = require('http');
//include my own module
var dt = require('./myfirstmodule');
//include url module
var url = require('url');
// 1. in command line: node myfirst.js
// 2. open http://localhost:8080
http.createServer(function (req, res) { //use the HTTP module to create a server
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Helle turtle, the current time is ' + dt.myDateTime());//write a response to client
    //read query String
    res.write(req.url); //http://localhost:8080/summer will output "/summer"
    //split query string
    var q = url.parse(req.url, true).query;
    res.write(q.year + " " + q.month); //http://localhost:8080/year=2017&month=July 
    res.end(); //end the response
}).listen(8080); //server object listens on port 8080