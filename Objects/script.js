const user = {
    firstName : 'Mayur',
    age : 24 ,
    isTotallyAwesome : true
}

// looping through objects
// for in loop
for(key in user){
    console.log(key)
}

// What will be the output
const obj = {
    a : 'one',
    b : 'two',
    a: 'three',
}

console.log(obj)


// create a function which will multiply all numeric values in object by 2
let nums = {
    a : 100,
    b : 200 , 
    title : 'My nums'
}

function multiplyBy2(obj){
    for(key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] = obj[key] * 2
        }
    }
}

multiplyBy2(nums)

console.log(nums)


// question 3 : Whats the output 
const a = {} 
const b = {key : "b"} 
const c = {key : "c"} 

a[b] = 123
a[c] = 456

console.log(a)

// output --> 456 
// kyuki a[b] aur a[c] are acting like a['[object Object]']
/* a["[object Object]"] = 123
a["[object Object"] = 456  */


// question 4 : JSON.stringify() and JSON.parse()

const user2 = {
    username : 'Akash',
    age : 24
}

// object to string
const userString = JSON.stringify(user2)
console.log(userString)

// string to object
const result = JSON.parse(userString)
console.log(result)

// but whats the usecase 
// local storage mein jaise backend se token aaya to usko localStorage mein store karne ke liye usko pehle string banana padega , hum direct object ko store nhi kar sakte , agar karnege to vo ->  test : [object Object] store kar lega
localStorage.setItem('test' , userString)



// question 5 : Hello into array -> ['H' , 'e' , 'l' ,'l' , 'o']
console.log([...'Hello'])

//
const admin = {admin : true , ...user2}
console.log(admin)


// question 6 -> whats output

const settings = {
    username : 'Piyush',
    level:13,
    health : 50
}

const data = JSON.stringify(settings , ["level" , "health"])
console.log(data)
// This will only stingify level and health key:value , not username 


// question 7 -> objects destructuring 
let user3 = {
    username : 'Piyush',
    age : 24,
    address : {
        city : 'Jabalpur',
        state : 'MP'
    }
}

const {username , age} = user3
console.log(username ,age)

const {address : {city , state}} = user3
console.log(city , state )


