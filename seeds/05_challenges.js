
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "challenge"; ALTER SEQUENCE challenge_id_seq RESTART WITH 3;')
    .then(function () {
      var challenges = [{
        id: 1,
        description: 'Connect with one person you met at the last event on LinkedIn',
        points: 1000,
      },
      {
        id: 2,
        description: 'Email one person you met at the last event and ask them to get coffee',
        points: 1000,
      }];
      return knex('challenge').insert(challenges);
    });
};
