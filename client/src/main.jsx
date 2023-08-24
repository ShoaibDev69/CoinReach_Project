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
);
