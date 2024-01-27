/*
print alphabets
*/

function printAlphabetsInRange(c1, c2) {
    // Convert characters to their ASCII values
    const startCharCode = c1.charCodeAt(0);
    const endCharCode = c2.charCodeAt(0);
  
    // Print the alphabets in a single line
    for (let i = startCharCode; i <= endCharCode; i++) {
      process.stdout.write(String.fromCharCode(i));
    }
  
    // Add a new line at the end
    console.log();
  }
  
  // Example usage
  const c1 = 'a';
  const c2 = 'f';
  printAlphabetsInRange(c1, c2);
  