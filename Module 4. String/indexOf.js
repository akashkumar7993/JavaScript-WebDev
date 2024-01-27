/*
IndexOf Methods
*/

// const displayMessage = "i am learning JavaScript";
// console.log(displayMessage.indexOf("a", 3));




// Finding a chracter inside a character or not using function

// function findChracter(text, char){
//     const index = text.indexOf(char)
//     if(index === -1){
//         return "Character not found";
//     }else{
//         return "Character found in the string";
//     }
// }

// Using An Arrow Funsction

const findChracter = (text, char) => text.indexOf(char) === -1 ? "Char not found" : "Char found in the String";

 const result = findChracter("I am Learing JavaScript", "v");
 console.log(result);