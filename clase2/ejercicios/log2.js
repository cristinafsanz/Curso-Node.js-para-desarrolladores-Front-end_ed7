function log(text) {
    console.log(new Date(), text);
}

function error(text) {
    console.error('ERRORRR!!!', new Date(), text);
}

module.exports = {
    log,
    error
}