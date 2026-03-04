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

function minimizeBias(ratings) {
    ratings.sort((a, b) => a - b);
    let totalBias = 0;

    for (let i = 0; i < ratings.length; i+=2) {
        totalBias += (ratings[i+1] - ratings[i]);
    }

    return totalBias;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ratingsCount = parseInt(readLine().trim(), 10);

    let ratings = [];

    for (let i = 0; i < ratingsCount; i++) {
        const ratingsItem = parseInt(readLine().trim(), 10);
        ratings.push(ratingsItem);
    }

    const result = minimizeBias(ratings);

    ws.write(result + '\n');

    ws.end();
}