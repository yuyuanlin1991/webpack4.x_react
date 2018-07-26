/**
 * Created by yuyuanlin on 2018/6/23.
 */

var Dictionary = require('../model/dictionary');

class dictionaryService {

    getByType(type,okFun,errFun) {
        console.log(type);
        Dictionary.forge()
            .where({type:type})
            .fetchAll({require:true})
            .then((model)=>{
                console.log(model);
                okFun(model);
            })
            .catch((err)=>{
                errFun(err);
            })
    }

    getByType1(type) {
        return new Promise(function(resolve,reject){
            Dictionary.forge()
                .where({type:type})
                .fetchAll({require:true})
                .then((model)=>{
                    resolve(model);
                })
                .catch((err)=>{
                    reject(err);
                })
        });
    }

}

module.exports = dictionaryService;