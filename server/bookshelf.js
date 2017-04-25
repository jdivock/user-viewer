const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    database : 'user_viewer',
  },
});

const bookshelf = require('bookshelf')(knex);

exports.User = bookshelf.Model.extend({
  tableName: 'users',
});
