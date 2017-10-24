
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "challenge"; ALTER SEQUENCE challenge_id_seq RESTART WITH 2;')
    .then(function () {
      var challenges = [{
        id: 1,
        description: 'Connect with one person you met at the last event on LinkedIn',
        points: 1000,
        completed: true
      }];
      return knex('challenge').insert(challenges);
    });
};
