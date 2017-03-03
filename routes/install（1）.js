var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
    //增加数据
    //连接数据库
    var server = new mongodb.Server("127.0.0.1",27017,{});
    var db=new mongodb.Db('novel',server,{});
    db.open(function(error,db){//数据库：mongotest
        if(error) throw error;
        /*db.collection('admins',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
                //增
                 *//*collection.insert({
                     loginId:'admin',
                     loginPass:'123456'
                 });*//*

                var ObjectID = mongodb.ObjectID;
                //改，一般第二个参数是查询出来的对象作为修改值递进去
                collection.update(
                    {_id:ObjectID('58734d33dfa12a14881448c9')},
                    {
                        loginId:'ccc',
                        loginName:'hlh',
                        loginPass:'654321'
                    }
                );

                //删
                //collection.remove({_id:ObjectID('587301205d6da1182025593e')});

                //查
                *//*collection.find().toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                });*//*
                //模糊查询  查询loginId属性值包含88字符的所有对象集合
                // {loginId:{$regex:/.*88*./i}或{loginId:{$regex:‘88’}
                *//*collection.find({loginId:{$regex:/.*88.*//**//*i}}).toArray(function(errfind,cols){
                 res.send(JSON.stringify(cols));
                 });*//*
                *//*collection.find({loginId:{$regex:'88'}}).toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                });*//*
               *//* collection.find({loginPass:{$regex:'654321'}}).toArray(function(errfind,cols){
                 res.send(JSON.stringify(cols));
                 })*//*
                //分页查询
                //limit(num)查询几条数据 skip(num)跳过几条数据
                *//*collection.find().limit(5).skip(10).toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                })*//*

                *//*collection.find().toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                })*//*
            }
        });*/

        db.collection('students',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
                //增
                /*collection.insert({
                    Name:'刘煌',
                    Sex:'男',
                    Id:'liuhuang',
                    Pass:'8888'
                });*/
                //改
                var ObjectID = mongodb.ObjectID;
                collection.update(
                    {_id:ObjectID('58736177769d6f15dc2e828e')},
                    {
                        Name:'李金金',
                        Sex:'女',
                        Id:'lijinjin',
                        Pass:'8888'
                    }
                );
                //删
               // collection.remove({_id:ObjectID('587363918182bc1c68baa1bb')});
                //查
                /*collection.find().toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                })*/
                //模糊查询 {loginId:{$regex:/.*88*./i}或{loginId:{$regex:‘88’}
                /*collection.find({Name:{$regex:"王"}}).toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                })*/
                //分页查询
                collection.find().limit(5).skip(15).toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                })


            }
        });



    });
    //res.send('安装成功');
});

module.exports = router;
