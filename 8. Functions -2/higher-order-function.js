/*
Higher Order Function  HOF
A function that accepts another function as an argument or return a function or does both is called an H.O.F
*/



function wrapper(){
    return "Welcome to JavaScript"; // first class function
}

//Highher order function

function greetMessage (){
    console.log("Akash", wrapper())
}
greetMessage(wrapper);

// another ex

function displayMessage(){
    return function(){
        console.log("Hello from the inner function")
    }
}

const output = displayMessage();
output();