import * as ActionType from "./action-type.js";

const InititalizeState = { count: 0 };

export function reducer(state = InititalizeState, action) {
  // do something
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      fetch("/reset")
        .then((response) => response.json())
        .then((result) => { //result함수는 비동기로 콜백되는 함수
          if (result) {
            return { ...state, count: 0 };
          }
        });
    default:
      return { ...state };
  }
}
