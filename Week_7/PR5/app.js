function createStore() {
  //store는 상태(state)의 묶음
  let state;
  let handlers = [];
  //구독발행모델: 어떤 함수를 줄테니(구독) 데이터가 바뀌면 그 함수를 호출(발행)해달라는 것

  function send(action) {
    //개발자들이 어플리케이션을 만들면서 시그널을 넘겨줌
    worker(state, action);
    handlers.forEach((handlers) => handlers());
    //데이터가 바뀌었을때 handlers호출
  }
  function subscribe(handler) {
    handlers.push(handler);
  }
  function getState() {
    return state;
  }
  return {
    send,
    getState,
    subscribe,
  };
}
function worker(state = { count: 0 }, action) {
  //아무것도 안들어오면 default로 객체로 만듬
  //상태로 무언가를 함
  //참조데이터로 이용하면 무결성이 깨지기 때문에
  //redux는 새로운 상태를 반환하라는 규칙을 만듬
  //즉 입력으로 상태 객체를 줄테니 이 객체를 항상 복사(deep copy)해서 새로운 객체로 반환
  //참조형 객체임에도 불구하고 원시형타입처럼 반환함
  switch (action.type) {
    case "increase":
      //action타입이 increase면
      return { ...state, count: state.count + 1 };
      //send할때마다 count라는 속성이 1씩 증가함
    default:
      //action타입이 increase가 아니면
      return { ...state };
      //복사한 state를 반환해줘
  }
  // if (action.type === "increase") {
  //   return { ...state, count: state.count + 1 };
  // }  if문 보다는 switch문을 씀
}

const store = createStore(worker);
//store를 모아서 넘겨줄꺼야

store.subscribe(function () {
  console.log(store.getState()); //{count: 1}
  //state를 읽을 수 있는 함수
});
//지금은 하나의 코드 안에서 진행되기때문에 이렇게 사용해도 문제가 되지 않지만
//컴포넌트가 여러개 있는 상황에서 어떤 컴포넌트가 데이터를 바꾸었는지
//그리고 바뀐 데이터를 다른 컴포넌트가 그 데이터가 바뀐데이터라는 것을 알고
//getState를 사용할 수 없음 즉 데이터가 바뀌었다는 것을 인지하고
//데이터를 읽을 타이밍을 잡기가 어려움. 그래서 그런 부분을 제공해주어야 함

store.send({ type: "incrase" });
// store안에 있는 send를 호출하게 되면
// send안에 있는 worker가 호출되면서 worker한테 state를 넘겨주니깐
// workder함수 호출됨. 그래서 결국 worker에서 무언가 상태를 바꾸는 일을 함
//action은 worker한테 무엇을 바꾸는지 힌트를 담고 있는 객체를 의미
//type이라는 속성을 가지고 있는 action
