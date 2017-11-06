var express = require('express');
var router = express.Router();
const knex = require('../db/knex')
const jwt = require('jwt-simple')

const Account = require('../models/Account.js')
const Badge = require('../models/Badge.js')
const Wallet = require('../models/Wallet.js')
const Event = require('../models/Event.js')
const Challenge = require('../models/Challenge.js')
const Account_Challenge = require('../models/Account_Challenge.js')
const Goal = require('../models/Goal.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  Account
    .query()
    .eager('badges')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/badges/:id', function(req, res, next) {
  Account
    .query()
    .where('id', '=', req.params.id)
    .eager('badges')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events', function(req, res, next) {
  Event
    .query()
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events/byeventid/:id', function(req, res, next) {
  Event
    .query()
    .where('id', '=', req.params.id)
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events/:userid', function(req, res, next) {
  Account
    .query()
    .where('account.id', '=', req.params.id)
    .eager('[events, events.[goals, retros]]')
    .then(accounts => {
      res.json(accounts)
    })
});

router.post('/events', function(req, res, next) {
  Event
    .query()
    .insertGraph(req.body)
    .then(result => {
      res.json(result)
    })
})

router.get('/events/goals/:id', function(req, res, next) {
  Event
    .query()
    .where('id', '=', req.params.id)
    .eager('[goals]')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events/retros/:id', function(req, res, next) {
  Event
    .query()
    .where('id', '=', req.params.id)
    .eager('[retros]')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events/retros/byuser/:id', function(req, res, next) {
  Event
    .query()
    .where('account_id', '=', req.params.id)
    .andWhere('checked_out', '=', true)
    .eager('[retros]')
    .then(accounts => {
      res.json(accounts)
    })
});

router.put('/events/goals/:id', function(req, res, next) {
  Event
    .query()
    .upsertGraph({
      id: req.params.id,

      goals: [{
        one_description: req.body.one_description,
        one_completed: req.body.one_completed,
        two_description: req.body.two_description,
        two_completed: req.body.two_completed,
        three_description: req.body.three_description,
        three_completed: req.body.three_completed
      }]
    })
    .then(result => {
      res.json(result)
    })
})

router.put('/events/checkout/:id', function(req, res, next) {
  Event
    .query()
    .upsertGraph({
      id: req.params.id,
      checked_out: req.body.checked_out
    })
    .then(result => {
      res.json(result)
    })
})

router.put('/events/retros/:id', function(req, res, next) {
  Event
    .query()
    .upsertGraph({
      id: req.params.id,
      retros: req.body
    })
    .then(result => {
      res.json(result)
    })
})

router.get('/challenges', function(req, res, next) {
  Challenge
    .query()
    .then(result => {
      res.json(result)
    })
})


router.get('/challenges/:id', function(req, res, next) {
  Challenge
    .query()
    .where('id', '=', req.params.id)
    .then(result => {
      res.json(result)
    })
})

router.get('/account_challenges/:id', function(req, res, next) {
  Account_Challenge
    .query()
    .where('account_id', '=', req.params.id)
    .eager('challenges')
    .then(result => {
      res.json(result)
    })
})

module.exports = router;
