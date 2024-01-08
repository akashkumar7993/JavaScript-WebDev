/*

    ternary OPerators --> condition ?  yes : No
*/

const totalMarkScore = 87;

if (totalMarkScore > 40){
 console.log("Congratulations you've cleared the exam great")
} else {
    console.log("you need to work hard")
}

(totalMarkScore > 40) ? console.log("Congratulations you've cleared the exam great") : console.log("you need to work hard") 

// code in short

const result = totalMarkScore > 40 ? "Congratulations you've cleared the exam great" : "you need to work hard"
console.log(result); 


// nested turnery operator

if (totalMarkScore < 40){
     console.log("you need to work hard")
    }else if (totalMarkScore < 60){
        console.log("B Grade")
    } else if (totalMarkScore < 75){
        console.log("A Grade")
    }else if (totalMarkScore < 85){
        console.log("A+ Grade")
    }else{
        console.log("Genius")
    }
    
const result = totalMarkScore < 40 ? "you need to work hard" : totalMarkScore < 60 ? "B Grade" :
totalMarkScore < 75 ? "A Grade" : totalMarkScore < 85 ? "A+ Grade " : "Genius";
console.log(result);