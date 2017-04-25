/* eslint func-names: 0 */

exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('address1');
    table.string('address2');
    table.string('phone');
  });
};

exports.down = function(knex, Promise) {

};
