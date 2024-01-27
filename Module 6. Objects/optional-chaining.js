/*
    Optional chaining ?.
*/

const user ={
    name : "Akash",
    age: 99,
    // address: {//optional
    //     street: "Dhanbad",
    //     state: "Jharkhand",
    //     city: "Dhanabad"
    // },
    likes: "Eat Code Sleep Repeat",
    getDisplay: function(){
        console.log("Welcome Akash")
    }
}

// sol 1  if address in not provided and you searched

// if(user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("Address not found");
// }

// sol2 

console.log(user.address?.city)  // this ? will check address if onlu=y address having an object it will move forward and return undeifined

user.getDisplay();
user.getDisplayAddress?.();