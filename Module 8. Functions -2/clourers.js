/*
    A cloure is the combination of a function bundeled together with reference to its lexical enviroment

    in other words a clousre is a function that rembebers  its outer varible and can access them
*/



function x(){
    let a = 10 ;
    function y(){
     let b = 20;
     console.log(a);
      function z(){
       console.log(b);
      }
     z();
    } 
   y();
  }
  x();
  

  /*
  " A closure is a function that remembers its outer variable and can access them ."
function y closes over the function x(), the memory used for the execution of function x() is gone but the scope chain that function y() has is still intact .this is the reason that we are able to access variable a  through function z() even after the memory for function x() is gone.
There are certain caveats in closures as well.

  */

function x(){
    let a = 10;
    return function y(){
     console.log(a);
     let a;
    }
   }
   const z = x();
   z();