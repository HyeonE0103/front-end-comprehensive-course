export const logger = store => next => action => {
  //next = dispath
  const currentState = store.getState();
  
  //어떤액션이 dispath되었다는 것은 action의 결과로 reduce가 돌아가서 새로운 데이터 상태가 만들어지는 것
  //현재 상태는 어떻고 payload는 무엇인지를 log로 남김
  console.groupCollapsed('action logger => ', action.type);
  //console접고
  console.log('current state: ', currentState);
  console.log('action payload', action.payload);
  console.groupEnd();
  //하나의 그룹영역 끝

  next(action);
  //물의 흐름을 자연스럽게 다음으로 넘겨줌
};
