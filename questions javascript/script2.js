//ckeck if a string is palindrome or not
// two pointer approach

function isPalindrome(str){
    let left = 0
    let right = str.length - 1

    while(left < right){
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

console.log(isPalindrome('racecar'))