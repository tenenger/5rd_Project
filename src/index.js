import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";

import configureStore from "redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SGlobalStyle } from "./index.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <SGlobalStyle />
    <Provider store={configureStore}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
