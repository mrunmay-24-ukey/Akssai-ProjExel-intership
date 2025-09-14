import { createStore } from "redux";

export function myStore(reducer){

    let state
    const store = {
        getState(){
            return state
        },
        dispatch(action){
            state = reducer(state , action)
        },
        subscribe(){
            
        }
    }
}