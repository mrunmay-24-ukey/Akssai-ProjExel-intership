const obj1 = {
    username : "Anurag",
    address:{
        city : 'jabalpur',
        state : 'MP'
    }
}

/* const obj2 = obj1
obj1.address.city = 'delhi'
console.log(obj2) */

// yeh case mein obj2 aur obj1 ka address same ho jata hai to agar obj2 mein changes karte hai to obj2 mein bhi hote hai 


// Shallow copy
const obj2 = {}
Object.assign(obj2 , obj1)
console.log(obj1)
obj2.username = 'Mayur'
console.log(obj2)

// ab alag alag address hai obj1 aur obj2 ke 

const obj3 = {...obj1}
console.log(obj3)

// shallow copy can be done either using Object.assign() or spread operator 

// point to be noted : 
// shallow copy mein agar objects ke andar objects hai to uska refrence hota hai to obj2 mein change karenge to obj1 mein bhi hoga 

/* obj2.address.city = 'Mumbai'
console.log("OBJ 1 ",obj1) */


// Deep Copy 
// deep copy se yeh cheez solve kar sakte hai 
const obj4 = JSON.parse(JSON.stringify(obj1))
console.log('Obj4' , obj4)
obj4.address.state = 'HP'
console.log(obj1)
console.log(obj4)