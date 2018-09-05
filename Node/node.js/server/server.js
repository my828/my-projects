const express = require('express');
const app = express();
const request = require('request');

let PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen('8080', () => {
    console.log('Listening on port 8080');
});