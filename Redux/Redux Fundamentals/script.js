let state = {
    count : 0
}

let prevState = state

function increment(){
    // mutating state
    /* state.count = state.count + 1 */

    // Immuatating State
    // state mutate nhi kar rahe poora ka poora naya object se hi replace kar de rahe hai
    state = {
        count: state.count + 1
    }
}

increment()
console.log(state)
increment()
console.log(state)
increment()
console.log(state)