const {readFileSync}= require('fs')

function ReadFile(filename){
    const contents= readFileSync(filename, "utf-8")
    const order= contents.replace(/\n/g, " ").split(" ")
    return order
}

let calories=ReadFile("./in.txt")

const ElfeGroups= array=>{
    const groups = [];
	let group = [];
	array.forEach(value => {
		if (value === "") {
			groups.push(group);
			group = [];
		} else {
    group.push(value);
}
});
groups.push(group);
return groups;
}
let Groups= ElfeGroups(calories);

let CaloriesByGroup=[]
const SumPerGroup= groups=>{
    const totalCaloriesPerGroup= groups.reduce((previous, current)=>{
        return (previous += parseInt(current));
    }, 0)
    CaloriesByGroup.push(totalCaloriesPerGroup)
};

for(let i = 0; i < Groups.length; i++) SumPerGroup(Groups[i], i)
const CalorieMax=Math.max(...CaloriesByGroup)
console.log(CalorieMax)

//Find the sum of three elves

const sortLargestTotal= CaloriesByGroup.sort((a,b)=>b-a); 
const sumThreeLargestTotal=sortLargestTotal[0]+sortLargestTotal[1]+sortLargestTotal[2]
console.log(sumThreeLargestTotal)




