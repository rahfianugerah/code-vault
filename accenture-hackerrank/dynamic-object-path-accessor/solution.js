'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getValueAtPath(obj, path) {
    const keys = path.split('.');

    let current = obj;

    for (let i = 0; i  < keys.length; i++) {
        if (current == null || current == undefined) {
            return undefined;
        }

        current = current[keys[i]];
    }

    return current;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const objCount = parseInt(readLine().trim(), 10);

    let obj = [];

    for (let i = 0; i < objCount; i++) {
        const objItem = JSON.parse(readLine());
        obj.push(objItem);
    }

    const pathCount = parseInt(readLine().trim(), 10);

    let paths = [];

    for (let i = 0; i < pathCount; i++) {
        const pathItem = readLine();
        paths.push(pathItem);
    }

    const results = paths.map(path => getValueAtPath(obj, path));

    ws.write(results.join('\n') + '\n');

    ws.end();
}