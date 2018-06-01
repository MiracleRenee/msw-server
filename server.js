//step 1.
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//step 2.
var app = new express();

//step 3.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// step 4.
app.get('/', function(request, response){
    response.status(200).send('my server is working');
})

// step 5.
var port = 3000;
app.listen(port, function(){
    console.log('my server is running on ',port);
})
