var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "account"; ALTER SEQUENCE account_id_seq RESTART WITH 2;')
    .then(function () {
      var accounts = [{
        id: 1,
        email: 'eshaben@icloud.com',
        password: bcrypt.hashSync('eshaben', 10),
      }];
      return knex('account').insert(accounts);
    });
};
