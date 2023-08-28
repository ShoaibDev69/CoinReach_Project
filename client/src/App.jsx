<<<<<<< HEAD
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
=======
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
>>>>>>> 53cc546663eb632c3853aaf7d95a1566c9641ac5
