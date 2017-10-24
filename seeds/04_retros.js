
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "retro"; ALTER SEQUENCE retro_id_seq RESTART WITH 2;')
    .then(function () {
      var retros = [{
        id: 1,
        conversations: 1,
        meaningful_conversations: 1,
        received_help: true,
        provided_help: false,
        one_gain: "experience",
        cards_received: 2,
        cards_given: 3,
        connector_connections: 0,
        rating: 5,
        event_id: 1
      }];
      return knex('retro').insert(retros);
    });
};
