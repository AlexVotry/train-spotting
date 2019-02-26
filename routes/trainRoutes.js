const mongoose = require('mongoose');
const Trains = mongoose.model('routes');

module.exports = app => {
  app.get('/api/trains', (req, res) => {
    Trains.find({}, (err, data) => {
      if (err) console.log(err);
      else res.send(data);
    });
  });
}
