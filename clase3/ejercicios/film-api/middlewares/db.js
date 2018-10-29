const db = require('../db')

module.exports = function(req, res, next) {
    req.db = db;
    next();
}