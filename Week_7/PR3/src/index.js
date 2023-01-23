import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppData from './appData';
//전역으로 상태관리가 되게끔 되어있음
//appData안에 상태와 관련된 데이터와 처리기들이 모두 모여있음

setInterval(() => {
  AppData.store.sectionList
    .forEach(section => (section.isDiscuss) && section.act++);

  ReactDOM.render(
    <React.StrictMode>
      <App 
        //애플리케이션 컴포넌트인 App을 import해서 사용하고 있음
        data={ AppData.store } 
        //AppData의 store를 data로 넘겨줌
        addSection={AppData.addSection} 
        startDiscuss={AppData.startDiscuss}
        stopDiscuss={AppData.stopDiscuss}
        removeSection={AppData.removeSection} />
    </React.StrictMode>,
    document.getElementById('root')
  );  
}, 1000);
