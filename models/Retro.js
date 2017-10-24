const Model = require('objection').Model

class Retro extends Model {

  static get tableName() {
    return 'retro'
  }
}

Retro.relationMappings = {
    events: {
      relation: Model.HasOneRelation,
      modelClass: __dirname + '/Event',
      join: {
        from: 'retro.id',
        to: 'event.id'
      }
    }
}

module.exports = Retro
