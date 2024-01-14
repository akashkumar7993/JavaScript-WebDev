/*
 Function as object Property
*/

const obj = {
    name: "Akash Kumar",
    greetMessage : function(){
        console.log("Hello Akash Welcome to the JavaScript");           // using with the keyword Function
    },
    bye(){
        console.log("Tata Bye Bye");
    }
}

obj.greetMessage();
obj.bye();