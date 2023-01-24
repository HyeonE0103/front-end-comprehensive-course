import { createStore } from './redux.js';
import * as Actions from './actions.js';
import reducer from './reducer.js';

const store = createStore(reducer);

const counterDisplay = document.querySelector('#counter');
const btnIncrease = document.querySelector('#btn-increase');
const btnAsyncIncrease = document.querySelector('#btn-async-increase');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');

store.subscribe(function() {
  const { counter } = store.getState();

  counterDisplay.textContent = counter;
  //UI 업데이트(counter변경)
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener('click', () => {
  store.dispatch(Actions.setCounter(0));
});

btnIncrease.addEventListener('click', () => {
  store.dispatch(Actions.increase());
});

btnAsyncIncrease.addEventListener('click', () => {
  store.dispatch(Actions.asyncIncrease({ url: '/async-increase' }));
  //버튼이 클릭됬을때 payload에 url에 속성에다가 /async-increase주소를 줌
});

btnDecrease.addEventListener('click', () => {
  store.dispatch(Actions.decrease());
});
