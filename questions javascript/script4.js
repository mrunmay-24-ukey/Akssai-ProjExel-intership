// array sum
const num = [1,2,3,4,5]

const sum = num.reduce((acc ,curr) => {
    return acc + curr
} , 0)

console.log(sum)

/// string
const numbers = '123456'
const ans = numbers.split('').map(Number).reduce((acc , curr) => acc + curr , 0) 
console.log(ans)

// number
const nums = 12345
const sum2 = nums.toString().split('').map(Number).reduce((acc, curr) => acc + curr , 0)
console.log(sum2)