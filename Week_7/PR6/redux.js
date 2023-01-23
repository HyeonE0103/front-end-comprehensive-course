//redux가 제공하는 코드
export const actionCreator = (type) => (payload) => ({
  //액션객체를 만들어 주는 도구를 제공
  //쿼링은 함수의 인자가 여러개 있을때 여러개의 인자를 할당하는 여러개의 내부함수로 쪼개는 것을 말함
  //기존의 쿼리 함수로 만들지 않으면 사용하는 측에서 payload를 넘기고 싶을때 데이터를 넘겨줄수가 없음
  //쿼리해버리고 actions에서 타입만 넘기고 actionCreator를 함수를 increase에 넣으면 increase가 함수임
  //필요한데이터를 action을 dispath할때마다 앱에서 넣어줄수 있음(훨씬 더 유용한 코드를 넣어줄수 있음)
  type,
  payload,
});
export function createStore(reducer) {
  //상태를 사용자가 바꾸는 함수를 redux에서는 reducer라고 함
  let state;
  let handlers = [];

  function dispath(action) {
    //action객체를 보낸다라는 의미에 dispath
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    dispath,
    getState,
    subscribe,
  };
}
