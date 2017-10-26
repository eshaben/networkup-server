var express = require('express');
var router = express.Router();
const knex = require('../db/knex')
const jwt = require('jwt-simple')

const Account = require('../models/Account.js')
const Badge = require('../models/Badge.js')
const Wallet = require('../models/Wallet.js')
const Event = require('../models/Event.js')
const Challenge = require('../models/Challenge.js')

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

// router.get('/challenges', function(req, res, next) {
//   Account
//     .query()
//     .eager('challenges')
//     .then(accounts => {
//       res.json(accounts)
//     })
// });
//
// router.get('/wallets', function(req, res, next) {
//   Account
//     .query()
//     .eager('wallets')
//     .then(accounts => {
//       res.json(accounts)
//     })
// });

// router.post('/events', function(req, res, next) {
//   Event
//     .query()
//     .insertGraph({
//         checked_in: true,
//         checked_out: false,
//         account_id: req.body.id
//
//         //I cannot do this because I don't have
//         //the event ID to enter into the goals
//         //section below. UGH. will need to post
//         //check in and then grab id for event?
//
//         goals: [{
//           description: req.body.goalOne,
//           completed: false,
//           event_id:
//         }]
//     })
//     .then(accounts => {
//       res.json(accounts)
//     })
// });


module.exports = router;
