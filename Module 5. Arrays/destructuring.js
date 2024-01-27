/*
 Destructuring arr
*/

// const number = [1,2,3];

// const[a,b,c, courses] = [1,2,3,["html","Css","javaScript"]];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(courses);

// another way do Destructureing is 

// const arr = [1,2,3,["html","Css","javaScript"],5,6];
// const [ , , , courses, a] =arr;
// console.log(a);
// console.log(courses);


// Swaping a Number

let a = 5;
let b = 8;

[a,b] = [b,a];

console.log("A -", a);
console.log("B -", b);