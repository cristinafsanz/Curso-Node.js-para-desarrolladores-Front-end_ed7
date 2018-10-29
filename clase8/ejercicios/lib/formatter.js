
const slack = require('./slack');
const shell = require('./shell');

module.exports = function(adapter) {
    if (adapter === 'slack') {
        return slack;
    } else {
        return shell;
    }
}