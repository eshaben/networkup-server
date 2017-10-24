var knex = require('./knex')

module.exports = {
  getUsers: function() {
    return knex('account').select()
  },
  getUserById: function(id) {
    return knex('account').select().where('id', id)
  }
}
