const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find()
      .then(band => res.render('index', { bands: band }));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Band.create(req.body)
      .then(() => res.redirect('/'));
  },
  getEdit: function (req, res) {
    Band.findById(req.params.id)
      .then(bands => res.render('edit', { band: bands } ))
  },
  postEdit: function (req, res) {
    Band.findByIdAndUpdate(req.params.id, { bands: req.body })
      .then(() => res.redirect('/'));
  },
  getDelete: function (req, res) {
    Band.findById(req.params.id)
      .then(band => res.render('delete', { band }));
  },
  postDelete: function (req, res) {
    Band.findByIdAndDelete(req.params.id, req.body)
      .then(() => res.redirect('/'));
  }
};