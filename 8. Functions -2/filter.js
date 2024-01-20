/*
        Filter function
*/

// const arr=[1,2,3,4,5,6,7,8,9];

// const output = arr.filter(number => number >5);
// console.log(output); 

// 2

arr = new Array(1, 2, 3, 6, 5, 4);
new_arr = []
for(let i = 0; i < 6; i++) {
    if(arr[i] % 2 == 0) {
         new_arr.push(arr[i]);           
    }
}
console.log(new_arr);

//3 

// arr = new Array(1, 2, 3, 6, 5, 4);
// var new_arr = arr.filter(function (x){
//     return x % 2==0;
// });

// console.log(new_arr)