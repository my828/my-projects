//import http package
const http = require('http');
const app = require('./app');
//get port from environment variable, if not stored then default 3000
const port = process.env.PORT || 3000;

// Listener is a function get executed whenever we get new request
const server = http.createServer(app);

server.listen(port);