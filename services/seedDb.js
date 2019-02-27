const mongoose = require('mongoose');
const Trains = mongoose.model('routes');
const seedData = require('./seedData');


module.exports = () => {
  mongoose.connection.db.collection('routes').countDocuments((err, count) => {
    if (!err && count === 0) {
      Trains.insertMany(seedData);
    }
    console.log('total records', count);
  });
}
