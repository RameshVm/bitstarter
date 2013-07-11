

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var outfile="index.html";
fs.readFileSync("index.html",in);
buf =new Buffer(256);
var len;
len = buf.write("index.html",0);

    console.log(buf.toString('utf8',0,len));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
