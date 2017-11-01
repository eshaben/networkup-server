
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "badge"; ALTER SEQUENCE badge_id_seq RESTART WITH 7;')
    .then(function () {
      var badges = [{
        id: 1,
        points_needed: 100,
        image: 'https://image.ibb.co/k53DdG/newbie_badge.png',
        title: 'Newbie',
      },
      {
        id: 2,
        points_needed: 1000,
        image: 'https://image.ibb.co/fCvn5w/amateur_badge.png',
        title: 'Amateur',
      },
      {
        id: 3,
        points_needed: 5000,
        image: 'https://image.ibb.co/dHx6yG/skilled_badge.png',
        title: 'Skilled',
      },
      {
        id: 4,
        points_needed: 10000,
        image: 'https://image.ibb.co/gdKasb/advanced_badge.png',
        title: 'Advanced'
      },
      {
        id: 5,
        points_needed: 25000,
        image: 'https://image.ibb.co/dtGoCb/expert_badge.png',
        title: 'Expert',
      },
      {
        id: 6,
        points_needed: 41000,
        image: 'https://image.ibb.co/hdteJG/suprememaster_badge.png',
        title: 'Supreme Master',
      }];
      return knex('badge').insert(badges);
    });
};
