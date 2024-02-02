/**
 * Q1: Arrange the words in the sentence in ascending order of their length
 * Input - Everything in JavaScript happens inside an Execution box
 * Output - in an box inside happens Execution Everything JavaScript
 */

const str = "Everything in JavaScript happens inside an Execution box";

function sortTextByWordLength(str) {
  let arrOfWords = str.split(" ");
  arrOfWords.sort((a, b) => a.length - b.length);
  return arrOfWords.join(" ");
}

const resutl = sortTextByWordLength(str);
console.log(resutl);