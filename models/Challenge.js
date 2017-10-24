const Model = require('objection').Model

class Challenge extends Model {

  static get tableName() {
    return 'challenge'
  }
}

Challenge.relationMappings = {
    accounts: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Account',
      join: {
        from: 'challenge.id',
        through: {
          from: 'account_challenge.challenge_id',
          to: 'account_challenge.account_id'
        },
        to: 'account.id'
      }
    }
}

module.exports = Challenge
