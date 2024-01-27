/*
    Hoisting is a process whereby you can access the value for a variable or function
    even before it is initialized
*/

var age = 100;
console.log(age);

console.log(showName);

function showName(){
    console.log("Akash kumar");
}

