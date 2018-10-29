#!/usr/bin/env node
const http = require('http');
const cluster = require('cluster');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
} else {
    http.createServer(function(request, response) {
        response.end('Utilizando el proceso con PID: ' + process.pid);
    }).listen(8080);
}