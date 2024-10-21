function isAnagram(str1, str2) {
    // Check if the strings are of the same length
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create a counter object to track the frequency of each letter in str1
    let counter = {};
  
    // Loop through the first string to count occurrences of each letter
    for (let letter of str1) {
      counter[letter] = (counter[letter] || 0) + 1;  // Initialize or increment count
    }
  
    // Loop through the second string and decrease the count
    for (let letter of str2) {
      if (!counter[letter]) {
        return false;  // If the letter is not found or the count is zero, not an anagram
      }
      counter[letter] -= 1;  // Decrease the count
    }
  
    return true;  // If all counts are zero, the strings are anagrams
  }
  
  // Example usage
  console.log(isAnagram('hello', 'llheo'));  // Output: true
  console.log(isAnagram('hello', 'world'));  // Output: false
  