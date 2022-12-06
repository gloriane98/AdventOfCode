const {readFileSync}= require('fs')

const input = readFileSync('in.txt', 'utf8');
const inputArray = input.split('\n');
const groups = [];
let currentGroup = [];
const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chars = [];
let score = 0;
let score2=0
inputArray.forEach((line) => {
    const first = line.slice(0, line.length / 2);
    const second = line.slice(line.length / 2, line.length);
    for (const c of first) {
        if (second.includes(c)) {
            chars.push(c);
            break;
        }
    }
});
inputArray.forEach((line, i) => {
    currentGroup.push(line);
    if ((i > 0 && !((i + 1) % 3)) || i == inputArray.length - 1) {
        groups.push(currentGroup);
        currentGroup = [];
    }
});
chars.forEach((c) => {
    score += priorities.indexOf(c) + 1;
});
groups.forEach((group) => {
    const [line1, line2, line3] = group;
    for (const l of line1) {
        if (line2.includes(l) && line3.includes(l)) {
            score2 += priorities.indexOf(l) + 1;
            break;
        }
    }
});
console.log(score);
console.log(score2);
