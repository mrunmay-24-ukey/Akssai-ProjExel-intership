function outer(){
    let a = 10;
    let b = 20;

    function inner(){
        console.log(a + b)
    }

    return inner 
}

const add = outer()
add()