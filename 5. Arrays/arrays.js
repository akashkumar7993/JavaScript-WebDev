/*
    Arrays --> Non-Premitive Data type 
*/

// Arrays are the collections of one or more items in a given Sequence.


let s1 = "Akash";
let s2 = "Bikash";
let s3 = "Abhishek";
let s4 = "Vishal";
let s5 = "harshit";

// // we can add complex Data Type inside an Array
// let studentName =["Akash", "Bikash", "Abhishek" ,"Harshit", "Vishal", "monu","Ashish",1,2,3,5,6,["html", "css", "java"],{schoolNmae: "KHS"}];
// console.log(studentName);


let studentName =["Akash", "Bikash", "Abhishek" ,"Harshit", "Vishal", "monu","Ashish","pooja","aditi","Sakshi"];

// console.log(studentName);
// console.log(studentName[1]); // to print one single Character
// console.log(studentName[2]);
// console.log(studentName[3]);
// console.log(studentName[4]); // to avoid the repeatation of the code we can DRY our code "DRY" --> "DONOT REPEAT YOURSELF" so there are two ways of doing this we are going to try Loop.
// console.log(studentName[5]);


// 1.
// for(let i=0; i<6; i++){  // i<6 is the length of the given array so we have to fix it Dynamically
//     console.log(studentName[i]); 
// }

// let arrayLength = studentName.length;
// console.log(arrayLength);                 // to print the length of the Array


// for(let i=0; i<arrayLength; i++){
//     console.log(studentName[i]);
// }


/*
    2.    for let of 
*/

for (let name of studentName){
    console.log(name);
}

/*
        for let in
*/
    for(let index in studentName){
        console.log(index);              // This loop gives the index no. of the given Arrays.
    }
