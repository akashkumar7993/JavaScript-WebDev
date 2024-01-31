/*
     Callbacks Functions
*/

const btn = document.getElementById("btn");
console.log("hello");

setTimeout(function calllback() {
    console.log("executed after a delay");
}, 4000);

btn.addEventListener("click", function () {
    console.log("clicked");
});