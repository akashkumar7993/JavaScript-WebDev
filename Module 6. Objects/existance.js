/*
Property Existence
*/





const obj = {
    name:"Akash",
    city:"Dhanbad"
}

const isPropertyFound = "age" in obj;
// console.log(isPropertyFound);

for(let key in obj){
    console.log(key, obj[key]);
}