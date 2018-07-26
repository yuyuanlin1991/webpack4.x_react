/**
 * Created by yuyuanlin on 2018/6/22.
 */

var express = require('express');
var router = express.Router();
var expenseService = require("../service/expense");
var ExpenseService =  new expenseService();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', function(req, res) {
    let user_id = 'f3ca2955-e32c-49f7-9f5a-8ac852703648';
    let {page,pageSize} = req.query
    ExpenseService.getExpense(page,pageSize,user_id)
        .then((model)=>{
            res.send({data:model,type:1});
        })
        .catch((err)=>{
            res.send({data:err,type:0});
        })
});
router.post('/', function(req, res) {
    let {cash,currency_type,expense_type,expense_detail,expense_time} = req.body;
    let user_id = 'f3ca2955-e32c-49f7-9f5a-8ac852703648';
    ExpenseService.createExpense(cash,currency_type,expense_type,expense_detail,expense_time,user_id)
        .then((models)=>{
            res.send({data:models,type:1});
        })
        .catch((err)=>{
            console.log(err);
            res.send({data:err,type:0})
    })

});
router.put('/', function(req, res) {
    let {cash,currency_type,expense_type,expense_detail,expense_time,id} = req.body;
    let obj = {
        cash:cash||null,
        currency_type:currency_type||null,
        expense_type:expense_type||null,
        expense_detail:expense_detail||null,
        expense_time:expense_time||null,
        id:id
    };
    for(let attr in obj){
        if(!obj[attr]){
            delete obj[attr];
        }
    }
    ExpenseService.editExpense(obj)
        .then((models)=>{
            res.send({data:models,type:1});
        })
        .catch((err)=>{
            console.log(err);
            res.send({data:err,type:0})
        })
});
router.put('/batch', function(req, res) {
    console.log(req.body.info);
    let info = req.body.info.split(";");
    let infoList = [];
    info.map((item)=>{
        infoList.push(JSON.parse(item))
    });

    ExpenseService.batchEditExpense(infoList)
        .then((models)=>{
            res.send({data:models,type:1});
        })
        .catch((err)=>{
            console.log(err);
            res.send({data:err,type:0})
        })
});
router.delete('/', function(req, res) {
    let ids = req.body.ids;
    ExpenseService.delExpense(ids)
        .then((models)=>{
            res.send({data:models,type:1});
        })
        .catch((err)=>{
            console.log(err);
            res.send({data:err,type:0})
        })
});

module.exports = router;