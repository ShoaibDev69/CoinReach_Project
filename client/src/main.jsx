<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
=======
const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App");
const TransactionsProvider = require("./context/TransactionContext");
require("./index.css");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    TransactionsProvider,
    null,
    React.createElement(App, null)
  )
>>>>>>> 53cc546663eb632c3853aaf7d95a1566c9641ac5
);
