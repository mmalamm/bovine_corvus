var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.listen(port, () => console.log('Ayo big the server running on port ', port));
