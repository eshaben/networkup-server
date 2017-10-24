const Model = require('objection').Model

class Account extends Model {

  static get tableName() {
    return 'account'
  }
}

Account.relationMappings = {
    badges: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Badge',
      join: {
        from: 'account.id',
        through: {
          from: 'account_badge.account_id',
          to: 'account_badge.badge_id'
        },
        to: 'badge.id'
      }
    },
    challenges: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Challenge',
      join: {
        from: 'account.id',
        through: {
          from: 'account_challenge.account_id',
          to: 'account_challenge.challenge_id'
        },
        to: 'challenge.id'
      }
    },
    wallets: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + '/Wallet',
      join: {
        from: 'account.id',
        to: 'wallet.account_id'
      }
    },
    events: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + '/Event',
      join: {
        from: 'account.id',
        to: 'event.account_id'
      }
    }
}

module.exports = Account;
