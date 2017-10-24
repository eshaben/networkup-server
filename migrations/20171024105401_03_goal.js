exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', (table) =>{
  table.increments();
  table.text('description').notNullable()
  table.boolean('completed').notNullable()
  table.integer('event_id').references('event.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goal');
};
