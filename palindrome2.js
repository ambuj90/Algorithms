// const isPalindrome = (str) => {
//     // Reverse the string
//     const reversedStr = str.split('').reverse().join('');
    
//     // Check if the original string is equal to the reversed string
//     return str === reversedStr;
// };

// // Example usage
// console.log(isPalindrome("noon"));       // true
// console.log(isPalindrome("hello"));      // false
// console.log(isPalindrome("madam"));      // true
// console.log(isPalindrome("Racecar"));    // false  (case-sensitive)


function isPalindrome(str) {
    // Split the string, reverse it, and join it back
    let reversedStr = str.split("").reverse().join('');
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
}

// Example usage
console.log(isPalindrome("noon"));   // true
console.log(isPalindrome("hello"));  // false
