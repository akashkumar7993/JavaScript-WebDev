/*
 split and join
*/




const inputstr = "Akash";
const arrOfChar = inputstr.split(""); // split will divide the arrays index
arrOfChar.reverse();  // reverse() will reverse the given data
const reversedstr = arrOfChar.join(" "); // join(seprator) join will add spcaing betweet the char
console.log(reversedstr);