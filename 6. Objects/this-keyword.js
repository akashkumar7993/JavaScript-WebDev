/*
    this Keyword 
    Refers to the object that is executing the function
*/

const obj = {
    name: "Akash",
    displayMessage: function(){
        console.log("Hello " + this.name); //implicit Binding
    },
};

// obj.displayMessage();

const user1 = {
    name: "Akash",
    showName: function(){
        console.log(this.name);
    },
};
const user2 = {
    name: "Bikash",
    showName: function(){
        console.log(this.name);
    },
};
const user3 = {
    name: "Naitik",
    showName: function(){
        console.log(this.name);
    },
};

user1.showName();
user2.showName();
user3.showName();