//IMPORTs

var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

// Instantiate server

var server = express();


// Body Parser configuration
server.use(bodyParser.urlencoded({
    extended:true
}));
server.use(bodyParser.json());

// Configure routes
server.get('/', function(req,res) {
    res.setHeader('Content-Type','test/html');
    res.status(200).send('<h1>Bonjour dans mon serveur</h1>');

});

server.use('/api/', apiRouter);

//launch server

server.listen(8080,function(){
    console.log("serveur en ecoute");
})