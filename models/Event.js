const Model = require('objection').Model

class Event extends Model {

  static get tableName() {
    return 'event'
  }
}

Event.relationMappings = {
    accounts: {
      relation: Model.HasOneRelation,
      modelClass: __dirname + '/Account',
      join: {
        from: 'event.id',
        to: 'account.id'
      }
    },
    goals: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + '/Goal',
      join: {
        from: 'event.id',
        to: 'goal.id'
      }
    },
    retros: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + '/Retro',
      join: {
        from: 'event.id',
        to: 'retro.id'
      }
    }
}

module.exports = Event
