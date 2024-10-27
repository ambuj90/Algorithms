
// JavaScript program to check whether 
// two strings are anagrams of each other

// Function to check whether two strings 
// are anagram of each other 
function areAnagram(str1, str2) {
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;

    // If lengths are not the same, they cannot be anagrams
    if (n1 !== n2) return false;

    // Sort both strings after converting them to arrays
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage
let str1 = "test";
let str2 = "tset";

if (areAnagram(str1, str2)) {
    console.log("The two strings are anagram of each other");
} else {
    console.log("The two strings are not anagram of each other");
}
