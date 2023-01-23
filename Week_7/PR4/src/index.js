import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import Sagas from "./sagas";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Sagas);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* Provider라는 컴포넌트가 App을 감싸는 형태로 바뀜 */}
    {/* App컴포넌트에 직접적으로 data나 행동을 주입하지 않음 */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
