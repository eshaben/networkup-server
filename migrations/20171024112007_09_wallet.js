exports.up = function(knex, Promise) {
  return knex.schema.createTable('wallet', (table) =>{
  table.increments();
  table.text('notes')
  table.text('image').notNullable()
  table.integer('account_id').references('account.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wallet');
};
