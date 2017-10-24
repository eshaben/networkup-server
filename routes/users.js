var express = require('express');
var queries = require('../db/queries')
var jwt = require('jsonwebtoken')

var router = express.Router();

require('dotenv').config()

router.get('/', (req, res) => {
  queries.getUsers().then(users => {
    res.json({data:users});
  })
});

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id).then(user => {
    res.json({data:user});
  })
});

module.exports = router;
