#!/usr/bin/env node
const spawn = require('child_process').spawn;

const stream = spawn('ls', ['-la']);

stream.stdout.setEncoding('utf-8');
stream.stderr.setEncoding('utf-8');

stream.stdout.on('data', (data) => console.log(data))
stream.stderr.on('data', (data) => console.error(data))