exports.up = function(knex, Promise) {
  return knex.schema.createTable('retro', (table) =>{
  table.increments();
  table.integer('conversations')
  table.integer('meaningful_conversations')
  table.boolean('received_help')
  table.boolean('provided_help')
  table.text('one_gain')
  table.integer('cards_received')
  table.integer('cards_given')
  table.integer('connector_connections')
  table.integer('rating')
  table.integer('event_id').references('event.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('retro');
};
