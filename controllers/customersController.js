const db = require("../models");

// Defining methods for the customersController
module.exports = {
  findAll: function(req, res) {
    db.Customer
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Customer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Customer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Customer
      .findOneAndUpdate({ email: req.body.email }, req.body, {upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCart: function(req, res) {
    console.log(req.body);
    db.Customer
      .findOneAndUpdate({ uid: req.body.uid }, {$push: {cart: req.body.cart}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveAddress: function(req, res) {
    console.log(req.body);
        db.Customer
    .findOneAndUpdate({ uid: req.body.uid }, {$set: {address: {
        street: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
        zipCode: req.body.address.zipCode
      }}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
  remove: function(req, res) {
    db.Customer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
