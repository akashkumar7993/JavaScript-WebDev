/*
    Destructuring Objects
*/

// let obj = {
//     name:"Akash",
//     address: {
//         state:"jharkhand",
//         city:"Dhanbad",
//         street:"Dhanbad"
//     },
//     courses:["HTML","CSS", "Js","Reactjs"],
// }

// // let {name, address, courses} = obj;

// // console.log(name);
// // console.log(address);

// // one another way of calling all the objects 

// // let {name, ...rest}=obj;
// // console.log(name);
// // console.log(rest);

// // changing usernanme to variable
//  let {name : userName}=obj;
//  console.log(userName);

// //  let {address: {state, city, street}} = obj;
// //  console.log(city);

//  let {address: {street}} = obj;
//  console.log(street);


/*

*/

const employees = {
    engineers: {
        em1:{
            id: 1,
            name: "Akash kumar",
            occupation: "front end engineer"
        },
        em2:{
            id: 2,
            name: "Bikash",
            occupation: "Data Scientics"
        },
    },
    placement: {
        em3: {
            id: 3,
            name: "nitu",
            occupation: "Data Scientics"
        }
    },
    youtube:{
        em4: {
            id: 4,
            name: "Arjun",
            occupation: "Youtube Manager"
        },
    }
}

let {engineers:{em2}} =employees;
console.log(em2); // calling one by one

let {engineers:{em2:{name, occupation}}} =employees;
console.log(name, occupation); // calling one by one


