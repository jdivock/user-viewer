const { User } = require('../db');
const express = require('express');

const router = express.Router();

router.route('/users')
  .get((req, res) => {
    User.fetchAll().then(models => res.json(models));
  });

router.route('/users/:user_id')
  .get((req, res) => {
    User.where({ id: req.params.user_id }).fetch().then(model => res.json(model));
  })
  .put((req, res) => {
    new User({ id: req.params.user_id })
    .save({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      address1: req.body.address1,
      address2: req.body.address2,
      phone: req.body.phone,
    }, { patch: true })
    .then(model => res.json(model));
  })
  .post((req, res) => {
    new User({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      address1: req.body.address1,
      address2: req.body.address2,
      phone: req.body.phone,
    })
    .save()
    .then(model => res.json(model));
  })
  .delete((req, res) => {
    new User({ id: req.params.user_id })
      .destroy()
      .then(model => res.json(model));
  });


module.exports = router;
