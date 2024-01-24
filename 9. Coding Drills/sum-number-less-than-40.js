/*
    Sum of numbers less than 40
*/

const arr = [10, 26, 17,26,37,64,33,29,27];

const result = arr.reduce((acc, curr) => curr< 40 ? acc + curr: acc,0)

console.log(result);

