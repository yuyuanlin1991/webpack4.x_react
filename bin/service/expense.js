/**
 * Created by yuyuanlin on 2018/6/23.
 */
var Expense = require("../model/expense");
var Bookshelf = require('../model/common');
var Promise =  require('bluebird');
class expenseService{
    getExpense(page,pageSize,userId){
        return new Promise( function(resolve,reject){
            Expense.forge()
                .where(userId?{user_id:userId}:{})
                .fetchPage({
                    page:page,
                    pageSize:pageSize,
                    withRelated:['expense','currency','user'],
                    require:true
                })
                .then((result)=>{
                    let _models = result.models;
                    resolve({
                        list:_models,
                        pagination:result.pagination
                    });
                })
                .catch((err)=>{
                    reject(err);
                })
        })
    }

    createExpense(cash,currency_type,expense_type,expense_detail,expense_time,user_id){
        return new Promise(function(resolve,reject){
            let obj ={
                cash:cash,
                currency_type:currency_type,
                expense_type:expense_type,
                expense_detail:expense_detail,
                expense_time:expense_time,
                user_id:user_id,
            };
            Expense.forge(obj)
                .save()
                .then((model)=>{
                    resolve(model);
                })
                .catch((err)=>{
                    reject(err);
                })
        })
    }

    editExpense(obj){
        return new Promise(function(resolve,reject){
            Expense.forge({id:obj.id})
                .save(obj)
                .then((model)=>{
                    resolve(model);
                })
                .catch((err)=>{
                    reject(err);
                })
        })
    }

    batchEditExpense(infoList){
        return new Promise(function (resolve, reject) {
            Bookshelf.transaction(function(t){
                return Promise.map(infoList,(item)=>{
                    return Expense.forge({id: item.id})
                        .save(item,{transacting:t})
                })
/*                return Expense.forge()
                    .fetch({transacting: t})
                    .tap((model) => {
                        return Promise.map(infoList, (item) => {
                            return Expense.forge({id: item.id})
                                .save(item, {transacting: t})
                        })
                    })*/
            })
                .then((model)=>{
                resolve({});
            })
                .catch((err)=>{
                    reject(err);
                })
        })
    }


/*    delExpense(id){
        return new Promise(function(resolve,reject){
            Expense.forge()
/!*                .query(function(qb){
                    qb.where("id",'in',id.split(","));
                })*!/
                .where({id:id})
                .destroy({require:true})
                .then((model)=>{
                    resolve(model);
                })
                .catch((err)=>{
                    reject(err);
                })
        })
    }*/


    delExpense(ids) {
        let _ids = ids.split(",");
        return new Promise(function (resolve, reject) {
            Bookshelf.transaction(function(t){
                return Promise.map(_ids,(id)=>{
                    return Expense.forge({id: id})
                        .destroy({transacting:t})
                })
            })
                .then((model)=>{
                resolve(_ids);
            })
                .catch((err)=>{
                 reject(err);
                })
        })
    }


}

module.exports = expenseService;