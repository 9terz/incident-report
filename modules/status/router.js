'use strict';

let express = require('express');
let router = express.Router();

let StatusController = require('./controller');

router.get('/', function (req, res) {
  StatusController.GetLists((err,lists) => {
    if (err) {
      return res.send('error');
    }
    res.render('index', {
      title: 'Hey',
      board: lists,
    })
  });
});


router.get('/',(req,res) => {

});

module.exports = router;
