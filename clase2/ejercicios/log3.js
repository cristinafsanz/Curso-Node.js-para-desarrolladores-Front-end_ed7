const cowsay = require('cowsay')

function log(text) {
    console.log(new Date(), text);
}

function error(text) {
    console.error('ERRORRR!!!', new Date(), text);
}

function cow(text) {
    cowsay.say({
        text: text,
        e: 'oO',
        T: 'U',
    })
}

module.exports = {
    log,
    error,
    cow
}