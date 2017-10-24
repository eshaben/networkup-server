exports.up = function(knex, Promise) {
  return knex.schema.createTable('account_challenge', (table) =>{
  table.increments();
  table.integer('account_id').references('account.id').unsigned().onDelete('cascade')
  table.integer('challenge_id').references('challenge.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account_challenge');
};
