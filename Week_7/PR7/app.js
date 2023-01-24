import { createStore } from "./redux.js";
import * as Actions from "./actions.js";
import reducer from "./reducer.js";
import { ASYNC_INCREASE_COUNTER, SET_COUNTER } from "./action-type.js";

const middleware = (store) => (next) => (action) => {
  //다음타자에게 넘겨준다는 의미로 dispath보다는 next를 씀
  //쿼링된 함수로 넘겨줌
  //action이 넘어오면 다음 친구에게 넘겨주는 역할
  //최종적으로 맨 마지막에는 reducer가 dispath되서 넘겨받는 구조
  console.log("m1: ", action);
  next(action); //받은것을 넘겨줌
};

const middleware2 = (store) => (next) => (action) => {
  //외부적인 코드를 주입하면서 기존코드를 변경함
  //원래는 리셋을 하면 0으로 리셋했지만 action의 payload를 100으로 변경함으로써
  //리셋하면 100으로 리셋됨
  console.log("m2: ", action);
  if (action.type === SET_COUNTER) {
    action.payload = 100;
  }
  next(action);
};

const middleware3 = (store) => (next) => (action) => {
  //1초뒤에 1증가
  console.log("m3: ", action);
  if (action.type === ASYNC_INCREASE_COUNTER) {
    setTimeout(() => {
      dispatch(Actions.increase());
    }, 1000);
  } else {
    //조건에 맞지 않으면 그대로 그냥 보내주쇼 물은 흘러가야하니께
    //이것으로 원치 않으면 물흐르는 것을 막아버릴 수 있다는걸 알 수 있음
    next(action);
  }
};

const store = createStore(reducer, [middleware, middleware2, middleware3]);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { counter } = store.getState();

  counterDisplay.textContent = counter;
  //UI 업데이트(counter변경)
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener("click", () => {
  store.dispatch(Actions.setCounter(0));
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(Actions.increase());
});

btnAsyncIncrease.addEventListener("click", () => {
  store.dispatch(Actions.asyncIncrease({ url: "/async-increase" }));
  //버튼이 클릭됬을때 payload에 url에 속성에다가 /async-increase주소를 줌
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(Actions.decrease());
});
