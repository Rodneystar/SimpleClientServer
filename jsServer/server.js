var http = require('http');
var express = require('express');

app = express();
port = 80;

app.use(express.static(__dirname + '/public'));
app.listen(port);
