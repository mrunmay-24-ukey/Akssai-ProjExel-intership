// reverse string -> split , reverse , join 
let username = 'Anurag'
const reversedString = username.split('').reverse().join('')
console.log(reversedString)

// method 2  // for loop
/* function reversedString(str){
    let reversed = ''
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reversed += str[i]
    }
    return reversed
} */
