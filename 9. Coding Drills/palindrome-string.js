/*
    Palindrome String
*/

const str = "Akash";

// // const arrOfChar = str.split("");

// // const reversedChar = arrOfChar.reverse();
// // const reversedStr = reversedChar.join("")
// // console.log(reversedStr);

// // in short
// const reversedStr = str.split("").reverse().join("")

// if (str === reversedStr){
//     console.log("String is a Palindrome")
// }else{
//     console.log("String is not a Palindrome")
// }

// using for

function getReversestr (){
    let reversedStr = "";
    for( let i=str.length-1; i >=0; i--){
        reversedStr += [i];
    }
    return reversedStr;
}

const result = getReversestr(str);
if (result === str){
    console.log("String is a Palindrome")
}else{
    console.log("String is not a Palindrome")
}