var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = req.query;
  let message = '';

  if (query.error) {
    message = 'Credenciales incorrectos'
  }

  res.render('index', { message });
});

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
})

router.post('/login', function(req, res, next) {
  const body = req.body;
  const { email, password, remember } = body;

  if (email === 'aaa@aaa.com' && password === 'aaa') {
    req.session.user = { email };
    res.redirect('/film');
  } else {
    res.redirect('/?error=true');
  }
});

module.exports = router;
