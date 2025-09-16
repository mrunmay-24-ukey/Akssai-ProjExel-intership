// max , min in array 
const num = [1,2,3,4,5]
const max = Math.max(...num)
const min = Math.min(...num)
console.log(max)
console.log(min)

// method 2 
// reduce method

// maximum in array
num.reduce((acc , curr) => {
    return acc > curr ? acc : curr
} , 0)

// minimum in array
num.reduce((acc , curr) => {
    return acc < curr ? acc : curr
})

