const chai = require('chai');
const splitWord = require('../lib/split-word');

const expect = chai.expect;

describe('input/output', function () {
  
  // OPTION 1: WITHOUT PROMISE
  it('return an array of words', function() {
    // preparación
    const input = 'hello world';
    const output = ['hello', 'world'];

    // ejecucion
    const result = splitWord(input);

    // resultado (asserts, comprobación)
    expect(output).to.be.an('array');
    expect(result).to.be.deep.equal(output);
  });

  it('throw an exception without arguments', function() {
    expect(splitWord).to.throw('An argument is required');
  });
});
