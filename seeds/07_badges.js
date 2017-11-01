
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "badge"; ALTER SEQUENCE badge_id_seq RESTART WITH 7;')
    .then(function () {
      var badges = [{
        id: 1,
        points_needed: 100,
        image: 'https://drive.google.com/open?id=0B1D72U3Cb3MJOGFuNU5CUEtHcHM',
        title: 'Newbie',
      },
      {
        id: 2,
        points_needed: 1000,
        image: 'https://drive.google.com/open?id=0B1D72U3Cb3MJQ0VsS1Voa1hRd1E',
        title: 'Amateur',
      },
      {
        id: 3,
        points_needed: 5000,
        image: 'https://drive.google.com/open?id=0B1D72U3Cb3MJU3hPSXpLQXlvVms',
        title: 'Skilled',
      },
      {
        id: 4,
        points_needed: 10000,
        image: 'coming soon',
        title: 'https://drive.google.com/file/d/0B1D72U3Cb3MJaFA4QUNmZjM3R0E/view',
      },
      {
        id: 5,
        points_needed: 25000,
        image: 'https://drive.google.com/open?id=0B1D72U3Cb3MJX0hPaHVjU19MbGs',
        title: 'Expert',
      },
      {
        id: 6,
        points_needed: 41000,
        image: 'https://drive.google.com/open?id=0B1D72U3Cb3MJVTQwZlk5c05HbWc',
        title: 'Supreme Master',
      }];
      return knex('badge').insert(badges);
    });
};
