var express = require('express');
var router = express.Router();
var novelThief=require('../lib/novelThief');
router.get('/', function(req, res, next) {
    novelThief.getSection('http://www.qu.la/book/83/69739.html',function(content){
        res.send(content);
    })
});

module.exports = router;