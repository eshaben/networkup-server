
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "retro"; ALTER SEQUENCE retro_id_seq RESTART WITH 4;')
    .then(function () {
      var retros = [{
        id: 1,
        conversations: 6,
        meaningful_conversations: 0,
        received_help: true,
        provided_help: false,
        one_gain: "experience",
        cards_received: 2,
        cards_given: 3,
        connector_connections: 0,
        rating: 5,
        event_id: 1
      },
      {
        id: 2,
        conversations: 5,
        meaningful_conversations: 4,
        received_help: false,
        provided_help: false,
        one_gain: "experience",
        cards_received: 2,
        cards_given: 0,
        connector_connections: 2,
        rating: 5,
        event_id: 2
      },
      {
        id: 3,
        conversations: 2,
        meaningful_conversations: 1,
        received_help: true,
        provided_help: true,
        one_gain: "experience",
        cards_received: 5,
        cards_given: 5,
        connector_connections: 0,
        rating: 9,
        event_id: 3
      }];
      return knex('retro').insert(retros);
    });
};
