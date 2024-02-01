/*
    Promise
*/

const isRequestSuccessfull = true;

let promise = new Promise((resolve,reject)=>{
  if(isRequestSuccessfull){
   resolve("promise resolved");
  }else{
   const error = new Error("Something Went Wrong");
   reject(error.message);
  }
});

promise.then(response=>console.log(response))
.catch(err=>console.log(err));