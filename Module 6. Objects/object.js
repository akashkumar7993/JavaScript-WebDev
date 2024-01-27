/*
Objects --> {Key, Value}
*/

//Object Literals

const personObj ={
    name: "Akash",
    age : 23,
    job : "Software Developer",
    courses : ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    "your project" : "updated"
};

console.log(personObj);

console.log(personObj.name);
console.log(personObj.job);


/*
 we are using square bracket to call the object properties which are multiple words */
console.log(personObj["age"]); // calling objects with the help of Square bracket
console.log(personObj["your project"]);