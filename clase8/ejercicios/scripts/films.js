const formatter = require('../lib/formatter');
const request = require('request-promise-native');

module.exports = function(robot) {
    const adapter = robot.adapterName;
    const format = formatter(adapter);

    /* robot.respond(/listado de pel[íi]culas/i, function(res) {
        robot
            .http('https://ghibliapi.herokuapp.com/films')
            .header('Content-Type', 'application/json')
            .get()(function(error, response, body) {
                const films = JSON.parse(body);

                res.send(format.formatFilms(films));
            })
    }); */

    robot.respond(/listado de pel[íi]culas/i, function(res) {
        request('https://ghibliapi.herokuapp.com/films').then((data) => {
            const films = JSON.parse(data);
            res.send(format.formatFilms(films));
        });
    });

    robot.respond(/dime las ([úu]ltimas|primeras) (\d+) pel[íi]culas/i, function(res) {
        request('https://ghibliapi.herokuapp.com/films').then((data) => {
            const films = JSON.parse(data);

            const sortedType = res.match[1];
            // sort last at the beginning
            let filmsSorted = films.sort((a, b) => a.release_date.localeCompare(b.release_date));
            if (sortedType !== 'primeras') {
                filmsSorted = filmsSorted.reverse();
            }

            const number = res.match[2];
            const filmsSortedNumber =  filmsSorted.slice(0, number);
           
            res.send(format.formatFilms(filmsSortedNumber));
        });
    });
}