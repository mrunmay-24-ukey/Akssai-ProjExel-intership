const nums = [1,2,3,4,5]

let size = nums.length
console.log(size)

// immuatable hai
let numsString = nums.toString()
console.log(numsString)

// iis index pe kya hai 
console.log(nums.at(2))
// OR
console.log(nums[2])


// join() -> immutable
console.log('Joined' , nums.join('')) 


// pop , push --> mutable methods
nums.push('hello')
console.log(nums)

nums.pop()
console.log(nums)

// concat 
const nums2 = [6,7,8]
const result = nums.concat(nums2)
// new array return karta hai concat , immuatable 
console.log(result)

// splice()

const fruits = ['Mango' , 'Banana' , 'Kiwi']
fruits.splice(1 , 0, 'Lemon')
console.log(fruits)
