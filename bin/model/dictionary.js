/**
 * Created by yuyuanlin on 2018/6/22.
 */

var bookshelf = require("./common");

var Dictionary = bookshelf.Model.extend({
    tableName: 'dictionary'
});

module.exports = Dictionary;