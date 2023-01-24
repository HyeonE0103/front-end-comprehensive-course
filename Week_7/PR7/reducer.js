import * as Actions from './action-type.js';

const InitializeState = {
  //초기값
  message: 'app store', 
};

export default function reducer(state = InitializeState, action) {
  switch(action.type) {
    case Actions.INCREASE_COUNTER:
      return { ...state, counter: state.counter === undefined ? 1 : state.counter + 1 };
    //기존상태가 undefined면 없을테니 1로 값을 세팅하고 그렇지 않으면 기존 count값에 +1 리턴
      case Actions.ASYNC_INCREASE_COUNTER:
        //비동기호출
      fetch(action.payload.url) //payload.url을 가지고 호출을 함
        .then(response => response.json())  //응답을 받으면 json파싱을 함
        .then(result => { //result를 받고 어떤처리를 하고 상태를 새로 만들어서 리턴
          return { ...state };
        })
        .catch(err => { //이미 콜백안에 들어있기 때문에 이미 리턴되어 받아줄곳이 없음
          return { ...state };  //state 업데이트 처리를 못함
        });
    case Actions.DECREASE_COUNTER:
      return { ...state, counter: state.counter === undefined ? 0 : state.counter - 1 };
        //기존상태가 undefined면 없을테니 0값을 세팅하고 그렇지 않으면 기존 count값에 -1 리턴

      case Actions.SET_COUNTER:
      return { ...state, counter: action.payload };
      //action들어온 payload값을 그대로 counter에 넣음 0이면 0을 100이면 100을
    default:
       return { ...state };
  }
}
