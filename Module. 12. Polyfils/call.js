/*
A polyfill is a piece of javaScript code to provide modern functionality on older browser
that cannot support it.

*/

// Polyfill for call
  
const obj = {
    name: "Akash",
    city: "Delhi",
};
function displayuserinfo(state){
    console.log(`Hi ia am ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.mycall = function (context, ...args){
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
};

Function.prototype.myApply = function(context, args){
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
}

// displayuserinfo.call(obj, "Delhi");
displayuserinfo.myApply(obj, ["Delhi"]);