import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

import reducer from "./reducers";
import App from "./components/App";
import rootSaga from "./sagas";
import { Socket } from "./utils/Socket.utils";
import { updateWorkflowStatus } from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

//uncomment below two lines and comment lines from 24 to 51 if you are interested in having your websocket implemented using SockJS client
// const socket = new Socket();
// socket.connect(store);

//Browser websocket api implementation
let socket;
if (window.WebSocket) {
  socket = new WebSocket("ws://localhost:9091/web-socket");
  socket.onmessage = function(event) {
    debugger;
    console.log("Received data from websocket: " + JSON.parse(event.data).workflows);
    store.dispatch(updateWorkflowStatus(JSON.parse(event.data).workflows));
  };
  socket.onopen = function(event) {
    console.log("Web Socket opened!" , event);

  };
  socket.onclose = function(event) {
    console.log("Web Socket closed.");
  };
} else {
  console.log("Your browser does not support Websockets. (Use Chrome)");
}
function send(message) {
  if (!window.WebSocket) {
    return;
  }
  if (socket.readyState == WebSocket.OPEN) {
    socket.send(message);
  } else {
    alert("The socket is not open.");
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
