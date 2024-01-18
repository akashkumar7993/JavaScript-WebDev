/*
    Function Borrowing - call Apply and Bind
*/

// const user1 = {
//     name: "Akash",
//     showName: function(){
//         console.log(this.name);
//     },
// };
// const user2 = {
//     name: "Bikash",
//     showName: function(){
//         console.log(this.name);
//     },
// };
// const user3 = {
//     name: "Naitik",
//     showName: function(){
//         console.log(this.name);
//     },
// };



const user1 = {
    name: "Akash",
    age: 24,
};
const user2 = {
    name: "Bikash",
    age: 26,
};
const user3 = {
    name: "Naitik",
    age: 22,
};
// function sayHi(){
//     console.log(this.name);
// }


function sayHi(degree, year){
    console.log(this.name, degree, year);
}

// sayHi.call(user1); // The value of user1
// sayHi.call(user2); // The value of user2


// // using calling opt 
// sayHi.call(user1, "BTeCh CS", 2022); 
// sayHi.call(user2, "BTeCh Ec", 2722); 
// sayHi.call(user3, "BTeCh Mc", 2027); 

// using apply 
sayHi.apply(user1, ["BTeCh-CS", 2022]); 
sayHi.apply(user2, ["BTeCh-Ec", 2722]); 
sayHi.apply(user3, ["BTeCh-Mc", 2027]); 