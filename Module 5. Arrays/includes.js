/*
    insludes 
    arr.includes(any);
*/

const avilableSize = ["S","M","L","XL","XXL","XXXL"];
const readlineSynce = require("readline-sync")
 const usersize = readlineSynce.question("Which size of shirt do you want (S/M/L/XL/XXL/XXXL)-");

const isSizeAvilable = avilableSize.includes(usersize);
if(isSizeAvilable){
    console.log("Size is Available");
}else{
    console.log("Size is not Available");
}