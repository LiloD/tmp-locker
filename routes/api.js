var express = require('express');
var router = express.Router();
var _ = require('lodash');

const EXPIRE_LIMIT = 1000*60*60 //1hour
/* GET home page. */

router.use(function(req, res, next){
    req.box = req.db.get('box');
    next();
});

router.post('/', function(req, res, next){
    var boxCollection = req.box;

    var content = _.toString(req.body.content);
    var expire = _.toNumber(req.body.expire);

    //validate
    if(content.size <= 0){
        next(new Error('Content should not be empty'));
    }

    if(expire <= 0 || expire >= EXPIRE_LIMIT){
        next(new Error('Not a valid expire time'));
    }

    //save to db
    boxCollection.insert({
        'content': content,
        'expire': expire 
    }).then(data => {
        var _id = data._id;
        // var ticket = queue.insert
        // res.json(data._id);
    }).catch(err => {
        next(err);
    })
});

module.exports = router;
