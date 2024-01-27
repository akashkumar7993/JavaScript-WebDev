/*
    WAP to delete all the vowels from a String
*/

const string = "The quick brown fox jumps over the lazy dog";

function getStringNotvowels(str){
    const vowels = ["a","e","i","o","u"];
    let result = "";
    for(let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result += char
        }
    }
    return result
}

const updateStr = getStringNotvowels(string);
console.log(updateStr); 