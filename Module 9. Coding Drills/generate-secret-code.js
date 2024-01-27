/*
    Generate Secret Code from a String
    Input --> Akash
    Encode bu chars --->2
    output --> blbti
*/

const inputstr = "Akash";
const shiftByPos = 2;

const getEncodeStr = (str, shiftByPos) =>{
    let encodeStr = "";
    let currentPos = 0, newPos = 0;
    for(let i =0; i<str.length; i++){
        currentPos = str.charCodeAt(i);
        newPos = currentPos + shiftByPos;
        encodeStr += String.fromCharCode(newPos);
        
    }
    return encodeStr;
}
console.log(getEncodeStr(inputstr, shiftByPos));