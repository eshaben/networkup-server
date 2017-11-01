
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "account_challenge"; ALTER SEQUENCE account_challenge_id_seq RESTART WITH 2;')
    .then(function () {
      var account_challenges = [{
        id: 1,
        completed: true,
        account_id: 1,
        challenge_id: 1
      },
      {
        id: 2,
        completed: true,
        account_id: 1,
        challenge_id: 2
      },
      {
        id: 3,
        completed: true,
        account_id: 1,
        challenge_id: 3
      },
      {
        id: 4,
        completed: true,
        account_id: 1,
        challenge_id: 4
      }];
      return knex('account_challenge').insert(account_challenges);
    });
};
