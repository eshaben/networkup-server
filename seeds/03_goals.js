
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "goal"; ALTER SEQUENCE goal_id_seq RESTART WITH 2;')
    .then(function () {
      var goals = [{
        id: 1,
        description: 'Introduce yourself to 5 different people/groups of people.',
        completed: true,
        event_id: 1
      }];
      return knex('goal').insert(goals);
    });
};
