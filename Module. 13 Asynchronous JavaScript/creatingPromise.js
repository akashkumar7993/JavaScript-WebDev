/*
    Promise
*/

const isResultSuccessfull = false;

const dp = [
    {id: 1, name: "Akash"},
    {id:2, name: "Ashish"},
];

let promise = new Promise((resolve, reject) => {
    if(isResultSuccessfull){
        setTimeout(() => resolve(db), 3000);
    }else{
        const error = new Error("Something went wrong");
        reject(error.message);
    }
});

promise.then((respone) => console.log(response))
.catch(function (err) {
    console.log(err);
})