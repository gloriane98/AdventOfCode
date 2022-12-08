const {readFileSync}=require("fs")

const input = readFileSync('in.txt', 'utf8');
const inputArray = input.trim().split('\n')

let count = 0;
inputArray.forEach((line) => {
    const ecart = line.split(',')
                .map((interval)=> interval.split("-").map(Number))

    const  [first,second]=ecart
    const [firstLow, firstHigh] = first
    const [secondLow, secondHigh] = second
    if (secondLow >= firstLow && secondHigh <= firstHigh) {
        count++;
    }
    else if (firstLow >= secondLow && firstHigh <= secondHigh) {
        count++;
    }
});
console.log(count);

//Part Two
const createRangedArray = (second, end) => {
    return [...Array(end - second + 1).keys()].map((x) => x + second);
};
let count2 = 0;
inputArray.forEach((line) => {
    const ecart = line.split(',')
        .map((interval)=> interval.split("-").map(Number))
        const [first,second]=ecart
        const [fl, fh] = first;
        const [sl, sh] = second;

        const firstArr = createRangedArray(fl, fh);
        const secondArr = createRangedArray(sl, sh);
        for (const x of firstArr) {
            if (secondArr.includes(x)) {
                count2++;
                break;
            }
        }

});
console.log(count2);
