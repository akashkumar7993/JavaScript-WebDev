/*
    String includes()   
*/


// it contains Boolean Values "True" or "False"

const displayMessage = "I love to code in Dark mode";


// console.log(displayMessage.includes("Dark"));



//conditional satatement

// const displayMessage = "I love to code in Dark mode";


// if (displayMessage.includes("Dark")){
//     console.log("Person loves to code in Dark mode");
// }else{
//     console.log("Person loves to code in Light mode");
// }



// finding Vowels 

const vowels = "aeiou";

for (let char of displayMessage){
    if(vowels.includes(char)){
        console.log(`${char} is a vowel`);
    }
}