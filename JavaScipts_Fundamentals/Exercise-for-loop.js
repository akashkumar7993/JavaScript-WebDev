/**
 * Star print
 

*
* *
* * *
* * * *
* * * * *


*/

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("*****");


// const symbol = ("* ")
// console.log(symbol.repeat(1));
// console.log(symbol.repeat(2));
// console.log(symbol.repeat(3));
// console.log(symbol.repeat(4));
// console.log(symbol.repeat(5));




// for(let i =1; i<=5 ; i++){
//     console.log(symbol.repeat(i));
// }



//  revrse

// for(let i=5; i>=1 ; i--){
//     console.log(symbol.repeat(i));
// }

 
// Print chracter String count 

// let userName = "Akash kumar Mahato";

// let count = 0;
// for(let i = 0; i< userName.length; i++){
//     count++;
// }

// console.log(`Number of Characters in the String is ${count}`);


/**
 * Given a rangre of Number from 1 to 101, find all the even number
 
 * **/

// let remainder;
// for (let i=1; i<=101; i++){
//     remainder = i% 2;
//     if (remainder === 0){
//         console.log(`${i} is an even number`);
//     }else {
//         console.log(`${i} is a odd number`);
//     }
// }

// Find Vowels 

const inputString = "Hello i love to Eat Burger king burger";

const vowel ="aeiou";
for( let i = 0; i < inputString.length; i++){
    if( vowel.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`);
    }else{
        console.log(`${inputString[i]} is not vowel`);
    }
}