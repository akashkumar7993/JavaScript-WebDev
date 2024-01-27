/*
String Methods
charAt() | charCodeAt()
*/

const displaymessage = "I am learning JavaScript";

/*
  using of charAt();
*/

//(CharAt) with the help od CharAt we can get the chracter at a particiular Index
const index =7;
// console.log(displaymessage.charAt(index)); // we can assign this code to a varialbe now 

const char = displaymessage.charAt(index);

// const char = displaymessage.charAt(index-1);  // to dispalay the last character of the given string
console.log(char);


/*
        charcodeAt()
*/

// const assciiCode = displaymessage.charCodeAt(index);
// console.log(assciiCode);

// ASCII (American Standard Code for Information Interchange) is a standard character encoding used in telecommunication.

const assciiCode = displaymessage.charCodeAt(index);  // to print a particular index of ASCIIcode
// console.log(`The ascii code of ${displaymessage.charAt(index)} is ${assciiCode}`);
console.log(`The ascii code of ${char} is ${assciiCode}`);

