/*
 Short hand
*/

function getObjects(name, city){
    return{
        name,
        city
    }
}

const obj = getObjects("Akash", "Dhanbad");
console.log(obj);


// shorthand property 

const student = "Ryan";
const course = "java";

console.log({student, course})

const student1 = getObjects("Akash", "Dhanbad");
console.log(student1);

const student2 = getObjects("Ryan","java");
console.log(student2);