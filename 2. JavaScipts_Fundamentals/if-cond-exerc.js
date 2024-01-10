/*
A program thats reads 3 string and print the smallest string
*/

const firstString = "apple";
const SecondString = "PineApple";
const thirdString = "Mango";

const lengthofFirstStr = firstString.length;
const lengthofSecondStr = SecondString.length;
const lengthofThirdStr = thirdString.length;

if (lengthofFirstStr < lengthofSecondStr && lengthofFirstStr < lengthofThirdStr){
    console.log(`${firstString} is the smallest string`);
} else if (lengthofSecondStr < lengthofFirstStr && lengthofSecondStr < lengthofThirdStr){
    console.log(`${SecondString} is the smallest`);
} else if(lengthofThirdStr < lengthofFirstStr && lengthofThirdStr < lengthofSecondStr){
    console.log(`${thirdStringString} is the smallest`);
}else {
    console.log("Found 2 or more String of same lenth");
}
