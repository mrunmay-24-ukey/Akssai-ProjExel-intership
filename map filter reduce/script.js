const arr =  ['Banana' , 'apple' , 'orange']

const capitalFruits = arr.map((fruit , i) => {
   const fruits = fruit.toUpperCase()
    console.log(i , fruits)
    return fruits
})
// Runs a function on every element of the array and returns a new array.
// doen't change a original array
// i matlab agar indexing karni hai to , i ko pass kar rahe 


//* Filter method
const filteredMonths = arr.filter((fruit) => {
    return fruit.toLowerCase().includes('n');
})
console.log(filteredMonths)

/* Both map and forEach functions are used to iterate over an arrays but there are some differences in their functionality.

1. **Returning values:** The `map` method returns a new array with transformed elements whereas `forEach` method returns `undefined` eventhough both of them are doing the same job.
    const arr = [1, 2, 3, 4, 5];
  arr.map(x => x * x); // [1, 4, 9, 16, 25]
  arr.forEach(x => x * x); //

  The `forEach()` method in JavaScript always returns undefined. This is because forEach() is used to iterate over arrays and perform side effects on each element, rather than returning a `new array or transforming the original array`

*/


// reduce method
let numbers = [1, 2, 3,4 ,5 ]
let sum = numbers.reduce((acc , curr) => {
    return acc + curr
})

console.log(sum)


let nums = [1 , 2, 3];
let product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product);
