/*
Adding property to Object
*/


const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want to know about the learner(name/age/course/city) -");

const obj = {
    name: "Akash",
    age:23
}

obj.city= "Dhanbad";
obj,course="B.voc";

console.log(obj[key]);