/*
User enters a number, if the number is greater than ask user to enter a number less than 50 again
*/

let readlinesynce = require("readline-sync")

let number = readlinesynce.question("Enter a number less than 50: ");

while(number >= 50){
    number = readlinesynce.question("Enter a number less tahn 50: ")
}

console.log("number accepted");