/**
 * Created by pc on 2017/1/10.
 */
var express = require('express');
var router = express.Router();
var db=require('../lib/db');
/* GET home page. */
router.get('/', function(req, res, next) {
        db.remove('admins',{},function(){
        });
        db.insert('admins',{loginId:'admins',loginPass:'123456'},function(){
            res.send('初始化成功');
        });
});

module.exports = router;