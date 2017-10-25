
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "goal"; ALTER SEQUENCE goal_id_seq RESTART WITH 2;')
    .then(function () {
      var goals = [{
        id: 1,
        one_description: 'Introduce yourself to 5 different people/groups of people.',
        one_completed: true,
        two_description: "Give your business card to at least one person.",
        two_completed: true,
        three_description: "Get a business card from someone you had a meaningful conversation with.",
        three_completed: true,
        event_id: 1
      }];
      return knex('goal').insert(goals);
    });
};
