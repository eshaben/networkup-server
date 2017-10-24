const Model = require('objection').Model

class Wallet extends Model {

  static get tableName() {
    return 'wallet'
  }
}

Wallet.relationMappings = {
    accounts: {
      relation: Model.HasOneRelation,
      modelClass: __dirname + '/Account',
      join: {
        from: 'wallet.id',
        to: 'account.id'
      }
    }
}

module.exports = Wallet
