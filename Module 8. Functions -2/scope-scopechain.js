/*
    Scope Chain
*/

let a = 10;
function x(){
  let b = 20 ;
  console.log({ a });
  function y(){
    let c = 30;
    console.log({ b });
    function z(){
     console.log({ c });
    }
    z();
  }
  y();  
}
x();