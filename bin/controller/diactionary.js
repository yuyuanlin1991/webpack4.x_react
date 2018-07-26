/**
 * Created by yuyuanlin on 2018/6/22.
 */

var express = require('express');
var router = express.Router();
var DictionaryService =  require('../service/dictionary');

var dictionaryService = new DictionaryService();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/:type', function(req, res) {
/*    dictionaryService.getByType(req.params.type,(model)=>{
        res.send({data:model,type:1});
    },(err)=>{
        res.send({data:err,type:0});
    })*/

    dictionaryService.getByType1(req.params.type)
        .then((model)=>{
            console.log("xxxx");
            res.send({data:model,type:1});
        })
        .catch((err)=>{
            res.send({data:err,type:0});
        })
});

module.exports = router;