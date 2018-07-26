/**
 * Created by yuyuanlin on 2018/6/22.
 */


var bookshelf = require("./common");

var User = bookshelf.Model.extend({
    tableName: 'user',
    hasTimestamps: ["create_time","update_time"] ,//自动会带上时间
    isAttribute:'id'
});


module.exports = User;