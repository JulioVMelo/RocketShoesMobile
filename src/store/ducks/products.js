// Reducers
const INITIAL_STATE = [{
  id:1,
  name: 'shoes',
  image: 'https://imgcentauro-a.akamaihd.net/500x500/93457683/tenis-nike-air-zoom-pegasus-36-masculino-img.jpg',
  price: 10.2,
  stock: 30,
}];

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {  
    case 'ASYNC_LIST_PRODUCTS_SUCCESS':
      state = action.payload;
      return state;      
    case 'DECREMENT_STOCK':
      return state;
    default:
      return state;
  }
}

//   Actions
export function listProducts (){
  return {
    type: "LIST_PRODUCTS",
    payload: {}
  } 
};

export function asyncListProducts() {
  return { 
    type: "ASYNC_LIST_PRODUCTS",
    payload: {}
  }
};
