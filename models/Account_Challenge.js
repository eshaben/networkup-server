const Model = require('objection').Model

class Account_Challenge extends Model {

  static get tableName() {
    return 'account_challenge'
  }
}

Account_Challenge.relationMappings = {
  accounts: {
    relation: Model.BelongsToOneRelation,
    modelClass: __dirname + '/Account',
    join: {
      from: 'account_challenge.id',
      to: 'account.id'
    }
  },
  challenges: {
    relation: Model.BelongsToOneRelation,
    modelClass: __dirname + '/Challenge',
    join: {
      from: 'account_challenge.id',
      to: 'challenge.id'
    }
  },

}

module.exports = Account_Challenge
