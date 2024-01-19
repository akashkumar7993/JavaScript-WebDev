/*
new Keyword and constructor functions

constructor functions technically are regular function. They have 2 conventions through
They are named with capital letter first.
They should be executed only with "new" operator
*/

function user (name,age){
    (this.name = name), (this.age = age);
}
const user1 = new user("Akash", 23);
const user2 = new user("niraj",34);

console.log(user1);
console.log(user2);