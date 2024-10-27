// function isPal2 (str){

//     let newStr = str.toLowerCase();
//     let left = 0;
//     let right = newStr.length-1;

//     while(left < right){
//         if(newStr[left] !== newStr [right]) return false;
        
//         left++;
//         right--;

//     }
//     return true;

// }

// console.log(isPal2("noon"));



function isPalindrome(str){
   let newStr = str.toLowerCase();
   let left =0;
   let right = str.length-1;

   while(left < right){
    if(newStr[left] !== newStr[right])  return false;

    left++;
    right --;

}
return true;
}

console.log(isPalindrome('noon'));