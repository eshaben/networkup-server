
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "account_badge"; ALTER SEQUENCE account_badge_id_seq RESTART WITH 3;')
    .then(function () {
      var account_badges = [{
        id: 1,
        account_id: 1,
        badge_id: 1
      },
      {
        id: 2,
        account_id: 1,
        badge_id: 2
      }];
      return knex('account_badge').insert(account_badges);
    });
};
