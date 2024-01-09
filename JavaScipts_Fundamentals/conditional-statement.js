

/*
Conditional Statement
*/

const readlineSynce =require("readline-sync");

const userAge = readlineSynce.question("How Old Are You")

if(userAge > 16){
    console.log("You are an Adult");
} else {
    console.log("You are not an adult")
}
