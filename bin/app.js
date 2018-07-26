/**
 * Created by yuyuanlin on 2018/6/22.
 */



var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

var expense = require('./controller/expense.js');
var dictionary = require('./controller/diactionary');

app.use(function(req,res,next){
    console.log("this first functions before all!");
    next();
});

app.use('/static',express.static('dist')); //静态托管资源

app.get('/',function (req,res) {
    res.sendFile(__dirname + '/dist/index.html');
});
app.get('/static/:filename',function(req,res){
    console.log(req.params.filename);
    res.sendFile(__dirname + '/dist/'+req.params.filename);
});

app.use('/expense', expense);
app.use('/dictionary', dictionary);

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});