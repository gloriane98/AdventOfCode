const {readFileSync} =require('fs')

const input = readFileSync('in.txt', 'utf8');
const inputArray = input.split('\n');
let mostCalories = 0;
let currentCount = 0;
const totals = [];
inputArray.forEach((line) => {
    if (line == '') {
        if (currentCount > mostCalories) {
            mostCalories = currentCount;
        }
        currentCount = 0;
    }
    else {
        currentCount += Number(line);
    }
});
console.log(mostCalories);

inputArray.forEach((line) => {
    if (line == '') {
        totals.push(currentCount);
        currentCount = 0;
    }
    else {
        currentCount += Number(line);
    }
});
const total = totals
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b);
console.log(total);
