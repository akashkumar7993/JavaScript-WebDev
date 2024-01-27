/*
Array Methods - push & Concat
*/

let fruits =["Apple", "Banana","Mamgo"];
console.log(fruits);

fruits.push("Orange");
console.log(fruits);

fruits.push("Kiwi","grapes","pineApple");
console.log(fruits);


//Concate 
let arr1 =[1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr2, arr3);
console.log(arr4);
console.log(arr5);