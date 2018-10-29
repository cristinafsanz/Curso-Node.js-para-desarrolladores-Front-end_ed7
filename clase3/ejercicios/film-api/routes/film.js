var express = require('express');
const auth = require('../middlewares/auth');
const db = require('../middlewares/db');
const filmId = require('./params/film_id');
var router = express.Router();

router.use(auth);
router.use(db);

filmId(router);

/* GET home page. */
router.get('/', function(req, res, next) {
  const films = req.db.get('films');

  res.render('films/index', { films });
});

router.get('/add', function(req, res, next) {
    res.render('films/film-add', { film: {} });
});

router.post('/add', function(req, res) {
    const film = req.body;
    const { name, description, image } = film;

    if (!name || !description || !image) {
        res.render('films/film-add', { film: {} });
    } else {
        req.db.addFilm(film);
        res.redirect('/film');
    }
});

router.get('/:film_id', function(req, res, next) {
    const film = req.film;
    console.log({film});

    res.render('films/film-description', { film });
  });

module.exports = router;
