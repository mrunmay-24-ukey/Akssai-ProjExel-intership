let reduxState = {
    post : 0,
    name : 'Akash',
    age : 26
    
}

let reduxState2 = reduxState



// reducer function / StateUpdater 

function reducer(state , action){
    console.log(action)
    if(action.type === 'post/increment'){
        return {...state , post : state.post + 1}
    }
    else if(action.type === 'post/decrement'){
        return { ...state , post : state.post - 1}
    }
    else if(action.type === 'post/incrementBy'){
        return { ...state, post : state.post + action.payload }
    }
    
}


// yeh sab redux BTS karta hai 
reduxState = reducer(reduxState , {type : 'post/increment'})
reduxState = reducer(reduxState , {type : 'post/increment'})
console.log(reduxState)
reduxState = reducer(reduxState , {type : 'post/decrement'})
console.log(reduxState)
reduxState = reducer(reduxState , {type:'post/incrementBy' , payload : 50})
console.log(reduxState)

