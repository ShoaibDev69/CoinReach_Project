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
          <a href="https://www.blockchaintechnology-news.com/" target="_blank">
            Market
          </a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a
            href="https://cointelegraph.com/tags/cryptocurrency-exchange"
            target="_blank"
          >
            Exchanges
          </a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="https://university.alchemy.com/" target="_blank">
            Tutorials
          </a>
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a
            href="https://crypto.com/university/crypto-wallets"
            target="_blank"
          >
            Wallets
          </a>
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a
          href="https://github.com/ShoaibDev69/CoinReach_Project"
          target="_blank"
          className="underline-link"
        >
          Project Source Code
        </a>
      </button>
      <p className="text-white text-sm text-center font-medium mt-2">
        <a
          href="https://github.com/ShoaibDev69/CoinReach_Project.git"
          target="_blank"
        >
          CoinReach Project by Shoaib Khan
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
