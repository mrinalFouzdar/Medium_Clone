import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> c1470a52998cb058b3ce185618a9dbefa6a3605c
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
