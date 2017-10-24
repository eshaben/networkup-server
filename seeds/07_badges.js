
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "badge"; ALTER SEQUENCE badge_id_seq RESTART WITH 2;')
    .then(function () {
      var badges = [{
        id: 1,
        points_needed: 0,
        image: 'coming soon',
        title: 'Networking Noob',
      },
      {
        id: 2,
        points_needed: 2000,
        image: 'coming soon',
        title: 'Networking Skilled',
      },
      {
        id: 3,
        points_needed: 0,
        image: 'coming soon',
        title: 'Networking Intermidiate',
      },
      {
        id: 4,
        points_needed: 0,
        image: 'coming soon',
        title: 'Networking Proficient',
      },
      {
        id: 5,
        points_needed: 0,
        image: 'coming soon',
        title: 'Networking Advanced',
      },
      {
        id: 6,
        points_needed: 0,
        image: 'coming soon',
        title: 'Networking Expert',
      }];
      return knex('badge').insert(badges);
    });
};
