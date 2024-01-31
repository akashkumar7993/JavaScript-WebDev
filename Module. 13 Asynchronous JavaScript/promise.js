/*
 promise = Promise is an object that has the status of an operation of an async operation, 
 and its corresponding value.
*/

let promise1 = fetch('https://randombig.cat/roar.json');
promise1.then(function(response){
  return response.json();
}).then(function(commits){
 alert(commits[0].author.login)
}).catch(function(error){
 alert("Some Error in fetching response")
});