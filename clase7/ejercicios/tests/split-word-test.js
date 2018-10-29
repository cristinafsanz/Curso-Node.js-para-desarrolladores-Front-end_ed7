const chai = require('chai');
const splitWord = require('../lib/split-word');

const expect = chai.expect;

describe('input/output', function () {
  
  // OPTION 2: WITH PROMISE AND CALLBACK
  it('return an array after 2s', function(callback) {
    const input = 'hello world';
    const output = ['hello', 'world'];
    
    splitWord(input).then((words) => {
    expect(words).to.be.deep.equal(output);
    callback();
    });
  });
});
