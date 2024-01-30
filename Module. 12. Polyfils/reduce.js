/*
A polyfill is a piece of javaScript code to provide modern functionality on older browser
that cannot support it.

*/

// Polyfill for reduce

const arr = [1,2,3,4,5,6];
function getsum(acc, cur){
    return acc + cur;
}

Array.prototype.myReduce = function (callback, initalValue){
    let acc = initalValue ? initalValue : this[0]; // acc = 1 
    for( let i = initalValue ? 0:1; i< this.length; i++){ // this [1] = 2 = curr
        //curr = this[i]
        acc = callback.call(this,acc, this[i], i, this);
    }
    return acc;
}

const total = arr.myReduce(getsum);
console.log(total);