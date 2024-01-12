/*
Iterating over Strings 
*/




let displayMessage = "I am learning JavaScript";


/*
 
 1. printing char ------------------------------------------->

 */

//  for(let char of displayMessage){
//     console.log(char);
//  }

 /*
 
 2. breaking char methods ------------------------------------->

 */
//  for (let char of displayMessage){
//     if (char ==="n"){
//         break;
//     }else{
//         console.log(char);
//     }
//  }


 
/*
 
 3. counting chracters occurence again and again --------------------->

 */

// let count = 0;
//  for (let char of displayMessage){
//     if (char ==="a"){
//         count++;
//     }
// }
// console.log(count);



/*
 
 4. checking char with index Number --------------------------------------->

 */

//  console.log(displayMessage[0]);
//  console.log(displayMessage[1]);  // this way of coding is not recommended so we will do thi swith the help of loop
//  console.log(displayMessage[2]);
//  console.log(displayMessage[3]);


// for(let i=0; i<displayMessage.length; i++){
//     console.log(displayMessage[i]);
// }          // to print the whole String we have to add ".length" after the variable to print the whole string




/*
 
 5. breaking the char string using the Loop --------------------------------------->

 */

//  for(let i=0; i<displayMessage.length; i++){
//     if(displayMessage[i] === "n"){
//         break;
//     }else{
//         console.log(displayMessage[i]);
//     }
// }




/*
 
 6. printning INdex value of a particular Char --------------------------------------->

 */

 for(let i=0; i<displayMessage.length; i++){
    if(displayMessage[i] === "n"){
        console.log(i);
    }
}


console.log(displayMessage.length); // to display the lenght t]of the given String
