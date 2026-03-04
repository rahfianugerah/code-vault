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

function updateTimes(signalOne, signalTwo) {
    let maxequal = -1;
    let updateCount = 0;

    const n = Math.min(signalOne.length, signalTwo.length);

    for (let i = 0; i < n; i++) {
        if (signalOne[i] === signalTwo[i]) {
            if (signalOne[i] > maxequal) {
                maxequal = signalOne[i];
                updateCount++;
            }
        }
    }

    return updateCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const signalOneCount = parseInt(readLine().trim(), 10);

    let signalOne = [];

    for (let i = 0; i < signalOneCount; i++) {
        const signalOneItem = parseInt(readLine().trim(), 10);
        signalOne.push(signalOneItem);
    }

    const signalTwoCount = parseInt(readLine().trim(), 10);

    let signalTwo = [];

    for (let i = 0; i < signalTwoCount; i++) {
        const signalTwoItem = parseInt(readLine().trim(), 10);
        signalTwo.push(signalTwoItem);
    }

    const result = updateTimes(signalOne, signalTwo);

    ws.write(result + '\n');

    ws.end();
}

// Example usage:
// const signalOne = [1, 2, 3, 4, 5];
// const signalTwo = [1, 2, 0, 4, 5];
// console.log(updateTimes(signalOne, signalTwo)); // Output: 3