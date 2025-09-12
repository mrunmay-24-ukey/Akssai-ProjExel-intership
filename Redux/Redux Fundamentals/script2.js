let reduxState = {
    post : 0,
    name : 'Akash',
    age : 26
    
}


function reducer(state , action){
    if(action.type === 'post/increment'){
        return {...state , post : state.post + 1}
    }
    else if(action.type === 'post/decrement'){
        return {...state , post : state.post - 1}
    }

    else if(action.type === 'post/incrementby'){
        return {...state , post : state.post + action.payload}
    }

    // agar kuch bhi na match kare to state hi return kar do
    return state
}
//action ek pure js object hota hai 

console.log(reduxState)
reduxState = reducer(reduxState , {type : 'post/increment' })
console.log(reduxState)
reduxState = reducer(reduxState , {type : 'post/decrement' })
console.log(reduxState)
reduxState = reducer(reduxState , {type : 'post/increment' })
console.log(reduxState)


reduxState = reducer(reduxState , {type:'post/incrementby' , payload : 100})
console.log(reduxState)

