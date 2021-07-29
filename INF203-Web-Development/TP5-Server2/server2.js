"use strict";

const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'))

const port = process.argv[2];

var db = JSON.parse(fs.readFileSync('db.json','utf8'));

try{
app.get('/', (request, response) => {
    response.send('Hi');
});

app.get('/kill',(request,response) => {
    response.send('The server is stopped !');
    process.exit(0);
});

app.get('/reload', (request,response) => {
    response.set('Content-type','text/plain');
    response.end("db.json reloaded");
});

app.get('/countpapers', (request, response) => {
    response.set('Content-type','text/plain');
    response.end(db.length.toString());
});

app.get('/authoredby/', (request , response) => {
    response.set('Content-type','text/plain');
    response.end();
});

app.get('/papersfrom/', (request , response) => {
    response.set('Content-Type', 'application/json');
    response.end();
});

app.listen(port, () => {
    console.log('Listening on port : ' + port +'!');
});
}catch(error){
  console.error(error);
}
