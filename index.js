const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const favicon = require('serve-favicon');
const path = require('path');
const secrets = require('./config/secrets');
require('./models/User');
require('./services/passport');

mongoose.connect(secrets.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [secrets.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/pic', (req, res) => {
  res.sendFile(path.join(__dirname + '/input.jpg'));
});

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.listen(PORT, () =>
  console.log('Ayo big the server running on PORT ', PORT)
);
