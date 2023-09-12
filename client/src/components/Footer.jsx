import React from "react";

import logo from "../../images/logo.svg";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://www.blockchaintechnology-news.com/" target="_blank">Market</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://cointelegraph.com/tags/cryptocurrency-exchange" target="_blank">Exchange</a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        <a href="https://github.com/ShoaibDev69/CoinReach_Project.git" target="_blank">Shoaib - Developer of CoinReach</a>
      </p>
    </div>

    {/* <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " /> */}
  </div>
);

export default Footer;
