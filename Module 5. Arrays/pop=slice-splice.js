/*
pop, slice, splice
*/

let courses = ["Html", "CSS", "JavaScript", "Reactjs","jquery","vue.js", "Angular"];
// console.log(courses);

// courses.pop();  //pop() removes the last element from the array 

// console.log("Updated value -", courses);


//Slice -------> its delete end index of the specified portion of the array


// let value = courses.slice(2,3);
// console.log(courses);
// console.log(value); 


let userName ="akash";

let firstUpperCaseChar = userName[0].toUpperCase();
let capitalizeName = firstUpperCaseChar + userName.slice(1);

console.log(capitalizeName);



// Splice

courses.splice(4,2) // Splice removes the targeted Elements from Index 4 + 2 indexes i.e., jquery and vue.js
console.log(courses);