const isAnagram = (str1, str2) => {
    // Normalize strings: remove spaces, convert to lowercase, sort characters
    const normalize = (str) =>
        str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

    // Compare the normalized strings
    return normalize(str1) === normalize(str2);
};

// Example usage:
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("evil", "vile"));      // true
console.log(isAnagram("hello", "world"));    // false
