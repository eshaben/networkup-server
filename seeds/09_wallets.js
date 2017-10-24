
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "wallet"; ALTER SEQUENCE wallet_id_seq RESTART WITH 2;')
    .then(function () {
      var cards = [{
        id: 1,
        notes: 'Common interests: Cryptocurrencies',
        image: 'coming soon',
        account_id: 1
      }];
      return knex('wallet').insert(cards);
    });
};
