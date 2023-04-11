import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { createStore, applyMiddleware } from "redux";

import { store, persistor } from "./store/reducers";
import "./assets/css/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// initializing toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashRouter } from "react-router-dom";
toast.configure();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
