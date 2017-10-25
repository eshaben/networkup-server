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
  console.log(req.body);
  knex('event').insert({
    checked_in: true,
    checked_out: false,
    account_id: req.body.account_id
  })
  .returning('*')
  .then(event => {
    res.json(event)
  })
})




module.exports = router;
