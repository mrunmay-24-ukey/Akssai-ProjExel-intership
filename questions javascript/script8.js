// Rest Spread

// make this array -> [1,2,3,1,2,3]
const nums = [1,2,3]

const nums2 = [...nums , ...nums]
console.log(nums2)

// concat method
/* const result = nums.concat(nums)
console.log(result)

 */

// rest

function test(a , b , ...c){
    console.log(a , b , c)
}

test(1,2 , 3,4,5)


