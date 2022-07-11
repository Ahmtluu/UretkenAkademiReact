import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(process.env.REACT_APP_FIREBASE_API_KEY)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
