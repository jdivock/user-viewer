
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jay', last_name: 'Divock', address1: '123 Fake street', email: 'fake@fake.com', phone: '1231231234'},
        {id: 2, first_name: 'Joe', last_name: 'Joerson', address1: '555 elm street', email: 'joe@fake.com', phone: '1231231234'},
        {id: 3, first_name: 'Bob', last_name: 'Boberson', address1: '899 Bob street', address2: 'APT 2', email: 'bob@fake.com', phone: '1231231234'},
      ]);
    });
};
