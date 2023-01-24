import { createStore } from "./redux.js";
import * as Actions from "./actions.js";
import reducer from "./reducer.js";
import { logger } from "./logger.js";
import { ASYNC_INCREASE_COUNTER } from "./action-type.js";

const asyncRouter = (jobs) => (store) => (next) => (action) => {
  //비동기 처리기 middleware
  const matchJob = Object.entries(jobs).find(([type]) => action.type === type);

  if (matchJob) {
    matchJob[1](store, action);
  } else {
    next(action);
  }
};

const asyncJobs = {
  //asyncJobs이 객체가 되었고 key value 형태로 되어있는데
  [ASYNC_INCREASE_COUNTER]: function (store, action) {
    store.dispatch(Actions.asyncRequest());
    //비동기 작업 처리 함수
    //key에 바로 action에 타입이 들어가니깐 비동기처리기 middleware에서
    //요 key에 매칭되는 action타입이 들어오면 요 함수를 호출해주는 식으로 코드 작성

    setTimeout(() => {
      store.dispatch(Actions.increase(20));
      store.dispatch(Actions.asyncResponse());
    }, 3000);
  },
};
const store = createStore(reducer, [logger, asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector("#counter");
const loadingMessage = document.querySelector("#loading");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { counter, request } = store.getState();

  loadingMessage.style.visibility = request ? "visible" : "hidden";
  counterDisplay.textContent = counter;
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
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(Actions.decrease());
});
