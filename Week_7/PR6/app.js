import { createStore, actionCreator } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Action from "./actions.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispath(Action.increase());
store.dispath(Action.increase());
store.dispath(Action.decrease());
store.dispath(Action.reset());
