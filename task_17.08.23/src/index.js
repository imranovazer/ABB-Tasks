import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ViewContexProvider from "./contex/ViewContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ViewContexProvider>
          <App />
        </ViewContexProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
