import { createStore, actionCreator } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Action from "./actions.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log("sub=>", store.getState());
});

store.dispath(Action.increase());
console.log("dis=>", store.getState());
store.dispath(Action.increase());
console.log("dis=>", store.getState());
store.dispath(Action.decrease());
console.log("dis=>", store.getState());
store.dispath(Action.reset());
console.log("dis=>", store.getState());
//동기코드
