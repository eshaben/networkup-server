const Model = require('objection').Model

class Badge extends Model {

  static get tableName() {
    return 'badge'
  }
}

Badge.relationMappings = {
    accounts: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Account',
      join: {
        from: 'badge.id',
        through: {
          from: 'account_badge.badge_id',
          to: 'account_badge.account_id'
        },
        to: 'account.id'
      }
    }
}

module.exports = Badge
