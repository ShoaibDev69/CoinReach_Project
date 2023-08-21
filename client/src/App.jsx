const Navbar = require("./components/Navbar");
const Welcome = require("./components/Welcome");
const Footer = require("./components/Footer");
const Services = require("./components/Services");
const Transactions = require("./components/Transactions");

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
