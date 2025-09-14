import { createStore } from "redux";
import { myStore } from "./my-redux";
const postCountElement = document.querySelector('.post-count')

console.dir(createStore);

let initialState = {
  post: 0,
  name: "Anurag",
  city: "Delhi",
};

// reducer mein ek initial state pas kardi , state ={}
// ab getState() ko store ke call kiya to vo empty object dega 
// agar state = initialState , to getState()  yeh dega
function reducer(state = initialState, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  }
  else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }

  return state;
}

/* reduxState = reducer(reduxState , {type : 'post/increment'}) */

const store = createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const myStore = myStore(reducer)


console.log(store);
// dispatch : f dispatch(action)  , getState : f ()  ,subscribe : f subscribe(listener)

// ye jab jab chalega jab action dispatch hoke state change hoga
store.subscribe(() => {
    console.log(store.getState())
    postCountElement.innerText = store.getState().post
})

postCountElement.innerText = store.getState().post

store.dispatch({type : 'post/increment'})

store.dispatch({type : 'post/increment'})
store.dispatch({type : 'post/decrement'})
 
postCountElement.addEventListener('click' , () => {
  store.dispatch({type : 'post/increment'})
})