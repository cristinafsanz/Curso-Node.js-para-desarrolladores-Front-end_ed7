const db = require('../../db');

module.exports = function(router) {
    router.param('film_id', (req, res, next, filmId) => {
        const film = db.get('films')
            .find((film) => film.id === filmId);
        
        if (film) {
            req.film = film;
            next()
        } else {
            res.status(404);
            res.render('error');
        }
        req.film = film;
    })
}

