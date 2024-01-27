/*
         Array Sort
*/

const fruits =["Apple","Mango","Orange","Banana","Kiwi"];
fruits.sort();
console.log(fruits);

//

const number = [1,5,6,2,7,3,9,4,3,11,65,83,23];

function sortInAscendingOrder (a, b){
    return a-b
}

number.sort(sortInAscendingOrder);
console.log(number);