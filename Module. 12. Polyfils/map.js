/*
A Polyfill is a piece of javascript code is used to provide modern functionality 
on older browser that do not support it.
*/

// Polyfill for map

const arr = [1,2,3,4,5];

function collback(number){
    return number ** 2;
}

// const squareArr = arr.map(collback);
// console.log(squareArr);

const squareArr = arr.map((number) => number ** 2);
// console.log(squareArr);
let tempArr = [];
for (let i=0; i<arr.length; i++){
    tempArr.push(arr[i] ** 2)
}
console.log(tempArr);

// Array.prototype.myMap = function (collback){
//     let tempArr = [];
//     for (let i =0; i<)
// };