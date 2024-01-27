/*
     Recursion is a programing term where the function is called from itself
*/

 
// JavaScript program to find sum of array
// elements using recursion.
 
// Return sum of elements in A[0..N-1]
// using recursion.
function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
 
// Driver code
 
let A = [1, 2, 3, 4, 5];
let N = A.length;
const total = findSum(A,N);
console.log(total);


// Javascript to find factorial
// of given number  
// function to find factorial
// of given number
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
    
  // Driver Code
  let num = 5;
  const fact = factorial(num);
  console.log(fact);