
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "account_challenge"; ALTER SEQUENCE account_challenge_id_seq RESTART WITH 2;')
    .then(function () {
      var account_challenges = [{
        id: 1,
        account_id: 1,
        challenge_id: 1
      }];
      return knex('account_challenge').insert(account_challenges);
    });
};
