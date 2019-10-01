import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import api from '../services/api';
// import {toast} from 'react-toastify';

function* asyncListProducts() {
  try {
    const response = yield call(api.get, '/products');
    yield put({type: 'ASYNC_LIST_PRODUCTS_SUCCESS', payload: response.data});
  } catch (error) {
    console.log(error);
    // toast.error('Ocorreu um erro');
  }
}

function* asyncListCart() {
  try {
    const response = yield select();
    yield put({type: 'ASYNC_LIST_CART_SUCCESS', payload: response.cart});
  } catch (error) {
    console.log(error);
    // toast.error('Ocorreu um erro');
  }
}

function* asyncIncrementAmount({payload}) {
  try {
    yield put({type: 'ASYNC_INCREMENT_AMOUNT_SUCCESS', id: payload.id});
    const stateNow = yield select();
    const getItem = stateNow.products.filter(item => item.id === payload.id);
    yield put({
      type: 'ASYNC_UPDATE_SUBTOTAL',
      id: payload.id,
      price: getItem[0].price,
    });
    // toast.success('Quantidade de items alterada');
    yield asyncListProducts();
  } catch (error) {
    console.log(error);
  }
}

function* asyncDecrementAmount({payload}) {
  try {
    yield put({type: 'ASYNC_DECREMENT_AMOUNT_SUCCESS', id: payload.id});
    const stateNow = yield select();
    const getItem = stateNow.products.filter(item => item.id === payload.id);
    yield put({
      type: 'ASYNC_UPDATE_SUBTOTAL',
      id: payload.id,
      price: getItem[0].price,
    });
    // toast.success('Quantidade de items alterada');
    yield asyncListProducts();
  } catch (error) {
    console.log(error);
  }
}

function* asyncAddCart({payload}) {
  try {
    yield put({
      type: 'ASYNC_ADD_CART_SUCCESS',
      id: payload.id,
      amount: 1,
      price: payload.price,
    });
    // toast.success('Item adicionado ao carrinho');
  } catch (error) {
    // toast.error('Ocorreu um erro');
    console.log(error);
  }
}

function* asyncRemoveItemToCart({payload}) {
  try {
    yield put({type: 'ASYNC_REMOVE_ITEM_TO_CART_SUCCESS', payload: payload.id});
    // toast.success('Item removido do carrinho');
  } catch (error) {
    console.log(error);
  }
}

function* asyncBuy() {
  try {
    const stateNew = yield select();
    console.log(stateNew);
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_LIST_PRODUCTS', asyncListProducts),
    takeLatest('ASYNC_ADD_CART', asyncAddCart),
    takeLatest('ASYNC_LIST_CART', asyncListCart),
    takeLatest('ASYNC_INCREMENT_AMOUNT', asyncIncrementAmount),
    takeLatest('ASYNC_DECREMENT_AMOUNT', asyncDecrementAmount),
    takeLatest('ASYNC_REMOVE_ITEM_TO_CART', asyncRemoveItemToCart),
    takeLatest('ASYNC_BUY', asyncBuy),
  ]);
}
