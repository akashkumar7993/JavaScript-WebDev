
const readlineSynce = require("readline-sync")

const number =Number(readlineSynce.question("Enter any Numbner: "))

const remainder = number % 2;

// if  (remainder === 0){
//     console.log(`${number}: is an even number`);
// } else {
//     console.log(`${number}:is a Prime Number`)
// }



// if  (remainder === 0){
//     console.log(`${number}: is an even number`);
//     if (number % 4 === 0){
//         console.log(`${number}: is dividible by 4`)
//     }else {
//         console.log(`${number}: is not dividible by 4`)
//     }
// } else {
//     console.log(`${number}:is a Prime Number`)
// }


if  (remainder === 0){
    console.log(`${number}: is an even number`);
    if (number % 4 === 0){
        console.log(`${number}: is dividible by 4`)
    }else {
        console.log(`${number}: is not dividible by 4`)
    }
} else {
    console.log(`${number}:is a Prime Number`)
    if (number % 5 === 0){
        console.log(`${number}: is dividible by 5`)
    }else {
        console.log(`${number}: is not dividible by 5`)
    }
}