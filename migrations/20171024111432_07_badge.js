exports.up = function(knex, Promise) {
  return knex.schema.createTable('badge', (table) =>{
  table.increments();
  table.integer('points_needed').notNullable()
  table.text('image').notNullable()
  table.text('title').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('badge');
};
