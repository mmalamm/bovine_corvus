const passport = require('passport');

module.exports = app => {
  app.get(
    'https://bovine-corvus.herokuapp.com/auth/github',
    passport.authenticate('github', {
      scope: ['user:email']
    })
  );

  app.get('https://bovine-corvus.herokuapp.com/auth/github/callback', passport.authenticate('github', { failureRedirect: '/failed'}), (req, res) => res.send(req.user));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
