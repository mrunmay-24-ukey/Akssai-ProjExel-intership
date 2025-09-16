// odd even 
function checkOddEven(num){
   console.log(num % 2 === 0 ? num + 'is even' : num + 'is odd')
}

/* checkOddEven(2)
checkOddEven(9)
 */
// for array 
const numbers = [1,2,3,4,5]
numbers.forEach(num => {
    console.log(num % 2 === 0 ? 'even' : 'odd')
})


