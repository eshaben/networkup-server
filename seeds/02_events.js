
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "event"; ALTER SEQUENCE event_id_seq RESTART WITH 4;')
    .then(function () {
      var events = [{
        id: 1,
        checked_in: true,
        checked_out: true,
        account_id: 1
      },
      {
        id: 2,
        checked_in: true,
        checked_out: true,
        account_id: 1
      },
      {
        id: 3,
        checked_in: true,
        checked_out: true,
        account_id: 1
      }];
      return knex('event').insert(events);
    });
};
