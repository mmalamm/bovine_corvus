const passport = require('passport');
const GithubStrategy = require('passport-github2');
const mongoose = require('mongoose');
const secrets = require('../config/secrets');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    {
      clientID: secrets.githubClientID,
      clientSecret: secrets.githubClientSecret,
      callbackURL: 'https://bovine-corvus.herokuapp.com/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ githubId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
