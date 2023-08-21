const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./App.jsx");
const { TransactionsProvider } = require("./context/TransactionContext");
require("./index.css");

ReactDOM.render(
  React.createElement(
    TransactionsProvider,
    null,
    React.createElement(App, null)
  ),
  document.getElementById("root")
);
