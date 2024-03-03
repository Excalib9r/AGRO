import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import { Provider } from "react-redux";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <App />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#FAF1E6",
              color: "black",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
