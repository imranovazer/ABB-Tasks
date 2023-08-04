import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import DataContexProvider from "./contex/DataContexProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContexProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContexProvider>
  </React.StrictMode>
);
