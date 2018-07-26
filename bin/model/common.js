/**
 * Created by yuyuanlin on 2018/6/22.
 */
var database = require("../config/database.json");
var knex = require('knex')({
    client: 'pg',
    connection: database
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('pagination');//引入插件
module.exports = bookshelf;