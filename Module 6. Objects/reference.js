/*
    Object Reference & Shallow Copy

*/


const person1 ={
    name : "Akash",
    age: "23"
}

// const person2 = person1;

// person2.name = "Ashish";

// console.log(person1);


// console.log(person2); // here we can seethat this calleing reference changing the value of person1 also. This happing because of the the term called Reference

/*
    Objects are not copied by the values they are copied by the reference // both the values are in the same objects (memory location)
    - reference basically means "Memory".
*/

// we will use Object Assign() to fix this

const person2 = Object.assign({}, person1); // Object.assign() is a shallow copy but onli when we use a Nested Object

person2.name = "Aashish";
person2.age = 18;

console.log(person1);
console.log(person2);