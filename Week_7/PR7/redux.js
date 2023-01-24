export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});

export function createStore(reducer, middlewarces = []) {
  let state;
  const handlers = [];

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  const store = {
    getState,
    subscribe,
    dispatch,
  };

  middlewarces = Array.from(middlewarces).reverse();
  //역순으로 만들어서 1.2.3 순서대로 진행되도록
  let lastDispatch = dispatch;

  //action이 흐르는 데이터 흐름 사이에다가 꽂아넣기
  //중간에 새로운파이프에 물(action)이 들어가야함
  //store, dispath, action 인자 3개를 쿼리로 넘겨줌
  middlewarces.forEach((middlewarce) => {
    //배열 middlewarces안에 들어있는 middlewarece 함수호출
    lastDispatch = middlewarce(store)(lastDispatch);
  });

  store.dispatch = lastDispatch;

  return store;
}
