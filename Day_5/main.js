const {readFileSync}= require('fs');

const inputArray=readFileSync("in.txt", "utf8").split("\n")

//Part One
const stacks=Array.from({length:9})
.fill()
.map(()=> []);
inputArray.forEach((line, i)=>{
    if( i < 10){
        const array=[]
        for(let i= 0 ; i <= line.length + 1; i+=4){
            if (i > line.length)
                break;
            array.push(line.slice(i, i + 3).slice(1, 2));
        }
        for (let i = 0; i <= stacks.length - 1; i++) {
            if (!array[i] || array[i] !== ' ') {
                stacks[i].push(array[i]);
            }
        }
    }
    else if (i > 9) {
        const moveArr = line
            .split(' ')
            .map((x) => Number(x))
            .filter((x) => !isNaN(x) && x !== 0);
        const [move, from, to] = moveArr;
        for (let i = 1; i <= move; i++) {
            const createToMove = stacks[from - 1].shift();
            stacks[to - 1].unshift(createToMove);
        }
    }
});
let letters = '';
for (let i = 0; i < stacks.length; i++) {
    if (stacks[i][0])
    letters += stacks[i][0];
}
// Part Two
const stacks2= Array.from({ length: 9 })
	.fill(0)
	.map(() => []);

inputArray.forEach((line, i) => {
	if (i < 10) {
		const arr= [];
		for (let i = 0; i <= line.length + 1; i += 4) {
			if (i > line.length) break;
			arr.push(line.slice(i, i + 3).slice(1, 2));
		}

		for (let i = 0; i <= stacks.length - 1; i++) {
			if (!arr[i] || arr[i] !== ' ') {
				stacks2[i].push(arr[i]);
			}
		}
	} else if (i > 9) {
		const moveArr = line
			.split(' ')
			.map((x) => Number(x))
			.filter((x) => !isNaN(x) && x !== 0);
		const [move, from, to] = moveArr;
		if (stacks2[from - 1]) {
			const moveCrates = stacks2[from - 1].splice(0, move);
			stacks2[to - 1].unshift(...moveCrates);
		}
	}
});

let letters2 = '';
for (let i = 0; i < stacks2.length; i++) {
	if (stacks2[i][0]) letters2 += stacks2[i][0];
}


console.log("1:",letters, "2:",letters2);