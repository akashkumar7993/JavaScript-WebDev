/*
A polyfill is a piece of javaScript code to provide modern functionality on older browser
that cannot support it.

*/

// Polyfill for filter

const arr = [1,2,3,4,5,6];

function getFilterArr(number){
    return number > 3; // return a boolean; true or False
}

const result = arr.filter((number)=> number > 3);
// console.log(result); 

let tempArr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]> 3){
        tempArr.push(arr[i]);
    }
}
console.log(tempArr);
