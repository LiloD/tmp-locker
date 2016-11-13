#!/usr/bin/env node

var _ = require('lodash');
var path = require('path');
var fs = require('fs');

var args = Array.prototype.slice.call(process.argv, 2);


console.log = (msg) => {
    process.stdout.write(`${msg}\n`);
};

console.error = (err) => {
    process.stdout.write(`err: ${msg}\n`);
}

if(args.length < 1){
    console.error('At least one arguments require');
    process.exit(1);
}

//TODO: Redirect stdout to /dev/null
var stdout = process.stdout;
var filePath = path.resolve(__dirname, _.first(args));
var func = require(filePath);

var runs = 0;
var TIME_LIMIT = 1000;
var startTime = new Date();
var totalTime = 0;

do {
    func();
    runs++;
    totalTime = new Date() - startTime;
}while(totalTime < TIME_LIMIT)

console.log(`Total run count: ${runs}`);
