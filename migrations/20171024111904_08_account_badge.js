exports.up = function(knex, Promise) {
  return knex.schema.createTable('account_badge', (table) =>{
  table.increments();
  table.integer('account_id').references('account.id').unsigned().onDelete('cascade')
  table.integer('badge_id').references('badge.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account_badge');
};
