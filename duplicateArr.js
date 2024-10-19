let arr = [1, 3, 1, 2, 5, 2, 4, 6, 8, 3, 5, 6, 9, 8, 7, 5, 6, 1];

let newDuplicateArr = [...new Set(arr)]; // Corrected "set" to "Set"

// Array can have duplicate values but Set cannot have duplicate values.

console.log(newDuplicateArr);