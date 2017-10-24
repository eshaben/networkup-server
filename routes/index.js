var express = require('express');
var router = express.Router();
const knex = require('../db/knex')

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

router.get('/challenges', function(req, res, next) {
  Account
    .query()
    .eager('challenges')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/wallets', function(req, res, next) {
  Account
    .query()
    .eager('wallets')
    .then(accounts => {
      res.json(accounts)
    })
});

router.get('/events', function(req, res, next) {
  Account
    .query()
    .eager('[events, events.[goals, retros]]')
    .then(accounts => {
      res.json(accounts)
    })
});


module.exports = router;
