/*
String.trim()
*/

const text = "                Hello Everybody                    ";
console.log(text.length); // checking the length iof the string
console.log(text.trim()); // applying String.trim()
console.log(text);        // randering with spacees

console.log(text.trim().substring(0,5)+"..."); // applying substring 