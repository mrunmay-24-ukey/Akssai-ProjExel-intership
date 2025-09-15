// higher order functions --> A higher-order function is a function that either accepts another function as an argument, returns a function as its result, or both.
//map , filter , reduce
// addEventListener
// setTimeout , setInterval

function a(arg){

    arg()
}

function b(){
    console.log('hello world')
}

a(b)


// callback functions
function c(arg){
    console.log(arg)
    arg()

}

c(() => {
    console.log('hiii')
})


// CallBack function --> when calling a function , we pass another function as an argument to it , the function which is passed is called callback function
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling back later
}


function sayBye() {
  console.log("Goodbye!");
}

greet("Anurag", sayBye);