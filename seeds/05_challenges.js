
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "challenge"; ALTER SEQUENCE challenge_id_seq RESTART WITH 21;')
    .then(function () {
      var challenges = [{
        id: 1,
        description: 'Attend your first event',
        points: 100,
      },
      {
        id: 2,
        description: 'Attend five events',
        points: 250,
      },
      {
        id: 3,
        description: 'Attend ten events',
        points: 500,
      },
      {
        id: 4,
        description: 'Attend 25 events',
        points: 1000,
      },
      {
        id: 5,
        description: 'Attend 50 events',
        points: 1500,
      },
      {
        id: 6,
        description: 'Attend 100 events',
        points: 3000,
      },
      {
        id: 7,
        description: 'Attend 250 events',
        points: 4500,
      },
      {
        id: 8,
        description: 'Attend 500 events',
        points: 7000,
      },
      {
        id: 9,
        description: 'Help one person',
        points: 200,
      },
      {
        id: 10,
        description: 'Help five people',
        points: 600,
      },
      {
        id: 11,
        description: 'Help ten people',
        points: 1500,
      },
      {
        id: 12,
        description: 'Help 25 people',
        points: 4000,
      },
      {
        id: 13,
        description: 'Introduce two of your connections',
        points: 500,
      },
      {
        id: 14,
        description: 'Have conversations with 5 different people',
        points: 125,
      },
      {
        id: 15,
        description: 'Have conversations with ten different people',
        points: 250,
      },
      {
        id: 16,
        description: 'Have conversations with 25 different people',
        points: 500,
      },
      {
        id: 17,
        description: 'Have conversations with 50 different people',
        points: 1000,
      },
      {
        id: 18,
        description: 'Have conversations with 100 different people',
        points: 2000,
      },
      {
        id: 19,
        description: 'Have conversations with 250 different people',
        points: 4000,
      },
      {
        id: 20,
        description: 'Have conversations with 500 different people',
        points: 7000,
      }];
      return knex('challenge').insert(challenges);
    });
};
