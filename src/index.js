import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "../src/store/app.store";
import { GlobalProvider } from "../src/shared/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <ToastContainer />
        <App />
      </GlobalProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
