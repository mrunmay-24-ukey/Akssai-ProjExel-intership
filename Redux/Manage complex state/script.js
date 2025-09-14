import { createStore } from "redux";
import { productsList } from "./productList";

const initialState = {
  products: productsList, // array aayaa API se
  cartItems: [],
  wishList: [],
};

function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "cart/addItem":
      return {...state ,cartItems:[ ...state.cartItems ,action.payload]}
    default:
        return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({
  type: "cart/addItem",
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: "cart/addItem",
  payload: { productId: 11, quantity: 1 },
});
