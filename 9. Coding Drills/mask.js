/*
     Mask the last char withh #
*/

const str = '2365786546778786543'; //236578654677878####;

const maskChar = "#".repeat(4);
const result = str.slice(0, str.length -4) + maskChar;
console.log(result);