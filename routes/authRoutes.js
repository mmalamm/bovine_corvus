const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/github',
    passport.authenticate('github', {
      scope: ['user:email', 'read:user']
    })
  );

  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/failed'}), (req, res) => res.send(req.user));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    console.log(req);
    res.send(req.user);
  });
};
