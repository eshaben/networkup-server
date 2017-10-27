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

/* GET home page. */
router.get('/', function(req, res, next) {
  Account
    .query()
    .eager('badges')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events/:id', function(req, res, next) {
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

router.put('/events/goals/:id', function(req, res, next) {
  Event
    .query()
    .upsertGraph({
      id: req.params.id,
      checked_out: true,
      goals: {
        id: req.params.id,
        one_completed: req.body.one,
        two_completed: req.body.two,
        three_completed: req.body.three
      }
    })
    .then(result => {
      res.json(result)
    })
})

router.put('/events/retros/:id', function(req, res, next) {
  console.log(req.body);
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

//get a list of all of the challenges
router.get('/challenges', function(req, res, next) {
  Challenge
    .query()
    .then(result => {
      res.json(result)
    })
})

//get challenge completion by User ID
router.get('/account_challenges/:id', function(req, res, next) {
  Account_Challenge
    .query()
    .where('account_id', '=', req.params.id)
    .eager('challenges')
    .then(result => {
      res.json(result)
    })
})

//
// router.get('/wallets', function(req, res, next) {
//   Account
//     .query()
//     .eager('wallets')
//     .then(accounts => {
//       res.json(accounts)
//     })
// });


module.exports = router;
