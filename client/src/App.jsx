const React = require("react");
const Navbar = require("./components/Navbar");
const Welcome = require("./components/Welcome");
const Footer = require("./components/Footer");
const Services = require("./components/Services");
const Transactions = require("./components/Transactions");

const App = () =>
  React.createElement(
    "div",
    { className: "min-h-screen" },
    React.createElement(
      "div",
      { className: "gradient-bg-welcome" },
      React.createElement(Navbar, null),
      React.createElement(Welcome, null)
    ),
    React.createElement(Services, null),
    React.createElement(Transactions, null),
    React.createElement(Footer, null)
  );

module.exports = App;
