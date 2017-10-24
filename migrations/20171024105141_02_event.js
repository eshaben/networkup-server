exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', (table) =>{
  table.increments();
  table.boolean('checked_in').notNullable()
  table.boolean('checked_out').notNullable()
  table.integer('account_id').references('account.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event');
};
