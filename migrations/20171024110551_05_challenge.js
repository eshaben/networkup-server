exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge', (table) =>{
  table.increments();
  table.text('description').notNullable()
  table.integer('points').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('challenge');
};
