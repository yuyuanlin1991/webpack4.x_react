/**
 * Created by yuyuanlin on 2018/6/22.
 */

var bookshelf = require("./common");
var Dictionary = require("./dictionary");
var User= require("./user");
var Expense = bookshelf.Model.extend({
    tableName: 'expense',
    hasTimestamps: ["create_time","update_time"] ,//自动会带上时间
    isAttribute:'id',
    expense:function(){
        return this.belongsTo(Dictionary,"expense_type","id");
    },
    currency:function(){
        return this.belongsTo(Dictionary,"currency_type","id");
    },
    user:function(){
        return this.belongsTo(User,"user_id","id");
    }
});
module.exports = Expense;