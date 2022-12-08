const {readFileSync}= require('fs');

function getPosition(c){
    c= c.charCodeAt(0)
    return c-( c< 96 ? 38 : 96)
};

const input = readFileSync('in.txt', 'utf8');
const inputArray = input.split('\n');
const priorities = [];

inputArray.forEach((line) => {
    const comp1 = line.slice(0, line.length / 2);
    const comp2 = line.slice(line.length / 2, line.length);
    for (const article of comp1) {
        if (comp2.includes(article)) {
            priorities.push(article);
            break;
        }
    }
});

let score = priorities.reduce((total, p) => total + getPosition(p), 0);
console.log(score);

// Part 2
let currentGroup = [];
const groups = [];

inputArray.forEach((elfe, i) => {
    currentGroup.push(elfe);
    if (!((i + 1) % 3)) {
        groups.push(currentGroup);
        currentGroup = [];
    }
    
});

let score2=0;
groups.forEach((group) => {
    const [elfe1, elfe2, elfe3] = group;
    for (const l of elfe1) {
        if (elfe2.includes(l) && elfe3.includes(l)) {
            score2 += getPosition(l);
            break;
        }
    }
});
console.log(score2);