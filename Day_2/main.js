const {readFileSync}= require('fs')

const mapMoves = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C',
};
const ownMoveScore = {
    'A': 1,
    'B': 2,
    'C': 3,
};
const gameScore = {
    'A': {
        'B': 6,
        'C': 0,
    },
    'B': {
        'A': 0,
        'C': 6,
    },
    'C': {
        'A': 6,
        'B': 0,
    }
};
const outcomeMapping = {
    'A': {
        'A': 'C',
        'B': 'A',
        'C': 'B',
    },
    'C': {
        'A': 'B',
        'B': 'C',
        'C': 'A',
    },
};
const sumUpPoints = (input) => {
    return input.reduce((sum, move) => {
        const pointsForSelection = ownMoveScore[move.b];
        const pointsForResult = move.a === move.b ? 3 : gameScore[move.a][move.b];
        return sum + pointsForSelection + pointsForResult;
    }, 0);
};
const inputPartOne = readFileSync('./in.txt', 'utf-8')
    .split('\n')
    .filter(line => line.trim().length > 0)
    .map(line => {
    return {
        a: line.split(' ')[0],
        b: mapMoves[line.split(' ')[1]],
    };
});
const inputPartTwo = inputPartOne
    .map(move => {
    return Object.assign(Object.assign({}, move), { b: (move.b === 'B') ? move.a : outcomeMapping[move.b][move.a] });
});
console.log('Part 1:', sumUpPoints(inputPartOne));
console.log('Part 2:', sumUpPoints(inputPartTwo));