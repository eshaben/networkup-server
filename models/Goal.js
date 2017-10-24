const Model = require('objection').Model

class Goal extends Model {

  static get tableName() {
    return 'goal'
  }
}

Goal.relationMappings = {
    events: {
      relation: Model.HasOneRelation,
      modelClass: __dirname + '/Event',
      join: {
        from: 'goal.id',
        to: 'event.id'
      }
    }
}

module.exports = Goal
