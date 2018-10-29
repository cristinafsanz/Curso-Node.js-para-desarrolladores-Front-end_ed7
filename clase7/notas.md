# CLASE 7: TESTING

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/tree/master/clase7

BDD: Desarrollo en base al comportamiento esperado por el usuario.

TDD: Desarrollar en base a los tests. Los tests al principio van a fallar porque no tenemos la funcionalidad, de esta forma el test dará verde cuando tengamos la funcionalidad desarrollada. Y cuando lo tenemos, es el momento de hacer un refactor para ir mejorando el código.

Pair programming:

Dos agentes:

Driver: Escribe el código
Navigator: La persona que dice el código a escribir.

STRONG STYLE PAIRING: Habla y dirige quien no tiene el teclado.
PING PONG PAIRING: El driver escribe el test. Pasa el teclado. Una vez que lo tiene, la otra persona tiene que implementar la funcionalidad hasta que pase el test. Se vuelve a pasar el teclado y así sucesivamente.

Mocha: Framework de testing. Podemos usar con él cualquier librería de asserts (Ej: Chai).
Chai: Es una librería de aserciones. La tradicional es expect(), se espera que algo sea algo definido específicamente.
Aserción: Sentencia que dice que algo es verdad.

TESTING:

1. Instalación en Node.js:

$ npm install --save-dev mocha

2. Ejecutar tests en un directorio:

$ mocha tests/*.js

3. Utilizando babel:

$ mocha --compilers js:babel-core/register -r babel-polyfill tests/*.js

Teardown: Código de preparación, hacer que se ejecute algo antes o después de la ejecución del test.

before: se ejecuta antes de cada pila test (it())
beforeEach: se ejecuta antes de cada test

EJERCICIO 1:

npm i --save-dev mocha
npm i --save-dev chai

https://www.chaijs.com/api/bdd/

Incluir en el package.json:

"scripts": {
"test": "mocha tests/*-test.js"
},

Vamos a crear el test primero y luego la función para hacer BDD:

split-word-test.js

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

split-word.js

module.exports = function() {
return [];
};

Más información por aquí:

https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877

EJERCICIO 1: Versión 2.

// split-word.js

module.exports = function(str) {
if (!str) {
throw new Error('An argument is required');
}
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(str.split(' '));
}, 1000);
});
};

// split-word-test.js

const chai = require('chai');
const splitWord = require('../lib/split-word');

const expect = chai.expect;

describe('input/output', function () {
/*
OPTION 1: WITHOUT PROMISE
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
*/

// OPTION 2: WITH PROMISE AND CALLBACK
it('return an array after 2s', function(callback) {
const input = 'hello world';
const output = ['hello', 'world'];

splitWord(input).then((words) => {
expect(words).to.be.deep.equal(output);
callback();
});
});

// OPTION 2: WITH PROMISE OR CALLBACK
it('return an array after 2s', function(callback) {
const input = 'hello world';
const output = ['hello', 'world'];

splitWord(input).then((words) => {
expect(words).to.be.deep.equal(output);
callback();
});
});
});

Cuando se ejecuta:

it(). Podemos pasarle la palabra only: it.only() Para que lance solo el test al que le ponga el only.

También podemos pasarle el it.skip() para saltar ese test.
