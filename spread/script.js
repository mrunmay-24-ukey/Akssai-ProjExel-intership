const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1 , ...arr2]
console.log(arr3)

const user1 = { name: "Anurag", age: 22 };
const user2 = { city: "Delhi", country: "India" };

const user3 = {...user1 , ...user2} 
console.log(user3)

// question 3 
function sum(...args){
    return args.reduce((acc , curr) => acc + curr , 0)
}
console.log(sum(1,2,3,4,5))

// question 4
const fruits = ["apple", "banana", "mango"];
const fruitsCopy = [...fruits , 'orange']
console.log(fruitsCopy)

// question 5
// Spread use karke user ka age 26 aur city "Mumbai" update karo
const user = { name: "Akash", age: 25, city: "Delhi" };
const updatedUser = {...user , age:26 , city : 'Mumbai'}
console.log(updatedUser)

// question 6
// create function maxValue() jo rest parameter se multiple numbers le aur maximum return kare
function maxValue(...args) {
  return Math.max(...args)
}

console.log(maxValue(1,5,2,9,4)); // 9

// question 7 
// Spread ka use karke ek flat array banaye: [1,2,3,4,5,6]
const array1 = [1,2,[3,4]];
const array2 = [5,6];

const flat = [...array1.slice(0 , 2) , ...array1[2] , ...array2]
console.log(flat)

//question 8
const user4 = { name: "Rohit", age: 28, city: "Bhopal", country: "India" };
// Destructuring use karke name aur age ko nikaalo aur rest properties ko ek object me store karo
const {name , age , ...rest} =user4


// question 9
// create function multiply(factor, ...numbers) jo sab numbers ko factor se multiply kare aur array return kare
function multiply(factor, ...args) {
  return args.map((num) => num * factor)
}

console.log(multiply(2, 1,2,3)); // [2,4,6]


// Merge multiple objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const merged = {...obj1 ,...obj2 , ...obj3}
console.log(merged)