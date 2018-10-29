const formatter = require('../lib/formatter');

module.exports = function(robot) {
    const adapter = robot.adapterName;
    const format = formatter(adapter);

    robot.hear(/hola/i, function(res) {
        const date = new Date();
        const hour = date.getHours();
        if (hour > 7 && hour < 12) {
            res.send('Buenos días');
        } else if (hour > 12 && hour < 19) {
            res.send('Buenas tardes');
        } else {
            res.send('Buenas noches');
        }
    });

    const films = [
        'Venom',
        'Johny English',
        'Ola de crímenes',
        'La monja',
        'El reino'
    ];

    robot.respond(/dime ([0-5]) películas/i, function(res) {
        const number = res.match[1];
        const myFilms =  films.slice(0, number);

        res.reply(myFilms.join(', '));
    });

    robot.respond(/adi[oó]s/i, function(res) {
        res.send(format.sayHello);
    });
}