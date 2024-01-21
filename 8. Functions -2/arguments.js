/*

    Arguments Objects in the non-Arrow Function
    ----- Arguments object is an array like object present locally inside function
    ----and it contains calue ofa ll the arguments passed to a function.
*/

function calculateTotal(a,b){
    return a + b;
   }
   
   const total = calculateTotal(3,4,5,6,7,8,9);
   console.log(total);

   // 


   function calculateTotal(a,b){
    arguments[0]= 9;
    console.log(arguments);
   }
   
   calculateTotal(3,4,5,6,7,8,9);

   //


   function hello(a = 10){
    console.log(a); // line2
    console.log(arguments); //line3
    arguments[0] = 9;   // line4
    console.log(arguments);   //line5
    console.log(a);  //line6
   }
   
   hello(4)