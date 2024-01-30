/*
A polyfill is a piece of javaScript code to provide modern functionality on older browser
that cannot support it.

*/

// Polyfill for flat

const arr = [1, 2, 3, 4, [5, 6], [[7, 8]]]; //[1,2,3,4,5,6,7,8];


Array.prototype.myFlat = function (depth=1){
    let tempArr = [];
    function getflattendArr(array, depth){
        for(let element of array){
            if (Array.isArray(element) && depth -1){                
            }else{
                tempArr.push(element);
            }
        }
    }
    getflattendArr(this, depth);
    return tempArr;
};

const result = arr.myFlat(2);
console.log(result);