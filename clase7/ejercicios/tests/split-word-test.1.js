const chai = require('chai');
const splitWord = require('../lib/split-word');

const expect = chai.expect;

describe('input/output', function () {
  it('return an array', function() {
    // preparación
    const input = 'hello world';

    // ejecucion
    const output = splitWord(input);

    // resultado (asserts, comprobación)
    expect(output).to.be.an('array');
  });
});

