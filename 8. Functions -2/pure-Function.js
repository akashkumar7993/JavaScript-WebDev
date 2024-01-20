/*
*Pure Function
*1. It takes an argument
*2. It should return something
*3. for same input you should get the same output
*4. the result sholud not be influced by outer parameter
*5. it should not mature the orignal argument
*/

// function getDoubleValue (number){
//     return number * 2;
// }
// const result = getDoubleValue(6);
// console.log(result);



function appendNumbers(arr){
    let newArr = [];
    newArr.push(...arr, 5,6);
    return newArr;
}
const result = appendNumbers([1,2,3,4]);
console.log(result);