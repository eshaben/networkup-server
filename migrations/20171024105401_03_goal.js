exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', (table) =>{
  table.increments();
  table.text('one_description').notNullable()
  table.boolean('one_completed').notNullable()
  table.text('two_description')
  table.boolean('two_completed')
  table.text('three_description')
  table.boolean('three_completed')
  table.integer('event_id').references('event.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goal');
};
