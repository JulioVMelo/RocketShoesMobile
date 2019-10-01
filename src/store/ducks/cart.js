// Reducers
const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {  
    case 'ASYNC_ADD_CART_SUCCESS':
      const subTotal = action.amount * action.price;
      return [...state, { id: action.id, amount:action.amount, subTotal: subTotal}];
    case 'ASYNC_LIST_CART_SUCCESS':
      state = action.payload;
      return state;
    case 'ASYNC_UPDATE_SUBTOTAL':
      state.map(item => item.id === action.id ? item.subTotal = action.price*item.amount : item);
      return state;
    case 'ASYNC_INCREMENT_AMOUNT_SUCCESS':
      state.map(item => item.id === action.id ? item.amount = item.amount + 1 : item);
      return state;
    case 'ASYNC_DECREMENT_AMOUNT_SUCCESS':
      state.map(item => item.id === action.id ? item.amount = item.amount - 1 : item);
      return state;
    case 'ASYNC_REMOVE_ITEM_TO_CART_SUCCESS':
      state = state.filter(item => item.id !== action.payload);
      return state;
    default:
      return state;
  }
}

//   Actions
export function listCart(){
  return {
    type: "ASYNC_LIST_CART",
    payload: {}
  }; 
};

 export function addProductToCart(id, price) {
  return {
    type: "ASYNC_ADD_CART",
    payload: {id, price}
  }
};

export function incrementAmount(id) {
  return {
    type: "ASYNC_INCREMENT_AMOUNT",
    payload: {id}  
  }
};

export function decrementAmount(id) {
  return {
    type: "ASYNC_DECREMENT_AMOUNT",
    payload: {id}  
  }
};

export function removeItemToCart(id) {
  return {
    type: 'ASYNC_REMOVE_ITEM_TO_CART',
    payload: {id}
  }
}

export function buy() {
  return {
    type: 'ASYNC_BUY',
    PAYLOAD: {}
  }
}
