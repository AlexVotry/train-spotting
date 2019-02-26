const mongoose = require('mongoose');
const Trains = mongoose.model('routes');


module.exports = () => {
  mongoose.connection.db.collection('routes').countDocuments((err, count) => {
    if (!err && count === 0) {
      Trains.insertMany([
        {
          "start": "a",
          "end": "b",
          "distance": 5
        },
        {
          "start": "b",
          "end": "c",
          "distance": 4
        },
        {
          "start": "c",
          "end": "d",
          "distance": 8
        },
        {
          "start": "d",
          "end": "c",
          "distance": 8
        },
        {
          "start": "d",
          "end": "e",
          "distance": 6
        },
        {
          "start": "a",
          "end": "d",
          "distance": 5
        },
        {
          "start": "c",
          "end": "e",
          "distance": 2
        },
        {
          "start": "e",
          "end": "b",
          "distance": 3
        },
        {
          "start": "a",
          "end": "e",
          "distance": 7
        },
      ]);
    }
    console.log('total records', count);
  });
}
