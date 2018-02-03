var express = require('express');
var morgan = require('morgan');

console.log('"ip","date","method","url","status","time"');

 
var app = express();
app.use(morgan('":remote-addr",":date[web]",":method",":url",":status",":response-time ms"'));

app.get("*", function(request, response) {
    response.sendFile("./index.txt", { root : __dirname});
});

app.post("*", function(request, response) {
    response.sendFile("./index.txt", { root : __dirname});
});

app.listen(8080);
