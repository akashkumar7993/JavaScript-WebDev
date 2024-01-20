/*
    Map Filter
*/

const arr = [1, 2, 3, 4, 5];

function getSquares(number){
    return number ** 2;
}
const output = arr.map(getSquares);
console.log(output);