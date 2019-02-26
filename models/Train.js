const mongoose = require('mongoose');
const { Schema } = mongoose;

const routeSchema = new Schema({
  start: String,
  end: String,
  distance: Number
});

mongoose.model('routes', routeSchema);
