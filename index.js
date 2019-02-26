const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

require('./models/Train');
const seed = require('./services/seedDb');

const Trains = mongoose.model('routes');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, seed);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./routes/trainRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`running on ${PORT}...`);
});
