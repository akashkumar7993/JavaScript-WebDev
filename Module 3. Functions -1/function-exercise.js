/*
Exercise 
* Sum of all number from 1-20;
*/

// ans

function calculateSum(min, max){
 let total = 0;
 for(let i =min; i<=max; i++){
    total = total + i;
 }
 return total; // console.log(total);
}

const result = (calculateSum(1, 20));
console.log(result);


const output = calculateSum(20, 90);
console.log(output);