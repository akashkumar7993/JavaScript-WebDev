/*
First class
 A programing language is  said to be have first class funsction in that language are treated like other variable
 so the function can be assinged to many other variable or passed as an argument or can be returned by another function.
*/

// 1----> Assign a function to a variable

// const greetMessage = function (){
//     console.log("Hello Akash welcome to the JavaScript");
// }
// greetMessage();




//2 ---> pass Function as an argument

// function wrapper(){
//     return "Welcome to the JavaScript";
// }

// function greetMessage(inner, name){
//     let message = inner();
//     console.log(name, message);
// }

// greetMessage(wrapper, "Akash");




// 3 ---> returning a function from fun

function greetMessage(){
    function wrapper(){
        let name = "Akash"
        console.log(name,"Welcome To The JavaScript");
    }
    return wrapper;
}
const output = greetMessage();
output();
