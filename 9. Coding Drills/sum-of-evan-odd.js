/*
 Given an array write a function that returns an objectwith sum of evan and odd numbers
 arr = [1,2,3,4,5,6]
 OUTPUT ={even: 12, odd: 9}
*/

const arr = [1,2,3,4,5,6];

const result = arr.reduce((acc, curr) => curr % 2 === 0 ? {...acc, even: acc.even + curr} : {...acc, odd: acc.odd + curr}, {even: 0, odd: 0});
console.log(result);