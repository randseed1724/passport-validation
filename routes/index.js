const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('Home --------------^-^-----------');

  console.log('SESSION (from express-session middleware)', req.session);

  console.log('USER (from passport middleware)', req.user);
  console.log(req.user);





  res.render('index', {
    user: req.user
  });
});

module.exports = router;
