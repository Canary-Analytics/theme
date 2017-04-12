module.exports = (passport,Strategy) => {

  passport.use(new Strategy({
      consumerKey: 'aDay6jhWc9b3y3Z31BRx6uXVc',
      consumerSecret: '6vbURPCBJSSQakw2t6eHvAY01HBong3rjnQbtGcr34ZNateN0s',
      callbackURL: 'http://localhost:8080/login/twitter/return'
    },
    (token, tokenSecret, profile, cb) => {
      return cb(null, profile);
  }));

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });

}
