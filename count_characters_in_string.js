//Write a function that takes in a string input and returns the number of occurrences of each character in the string.
let str = "Hello World!!!";
// { h: 1, e: 1, .... etc}

function countOnlyLetters(str) {
  // Convert to lowercase to treat 'A' and 'a' as the same character
  return str
    .toLowerCase()
    .split("")
    .reduce((counts, char) => {
      // Only count if it's a letter (a-z)
      if (/[a-z]/.test(char)) {
        counts[char] = (counts[char] || 0) + 1;
      }
      return counts;
    }, {});
}

// Example usage
const result = countOnlyLetters("Hello, World! 123");
console.log(result);
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
