[<h1>**CoinReach - Web 3.0 Blockchain Application**</h1>](https://coin-reach-project.vercel.app/)

![Project Logo](https://github.com/ShoaibDev69/CoinReach_Project/assets/124503086/73af6449-1f35-423d-9f6c-1ba406f18de3)

CoinReach is the ultimate platform for seamlessly managing your crypto assets,
featuring elegant wallet integration, an Ethereum card interface, and
swift, secure transactions.

![Project_ScreenShot](https://github.com/ShoaibDev69/CoinReach_Project/assets/124503086/c36efcef-aed0-4f7a-9878-580acf277929)

## Services that we continue to improve

1. _Effortlessly link your wallet, view your Ethereum address, and manage transactions within a stylish interface._

2. _Craft personalized Ethereum cards with your wallet address, ready to send crypto securely with optional messages._

3. _Benefit from faster transaction processing while maintaining top-notch security when sending Ethereum to recipients using our platform._

## Folder Structure

This repository follows a structured organization of files and directories to help you easily navigate and understand the project's components. Below is an overview of the folder structure:

```bash
📦 root
 ┣ 📂 client
 ┃ ┣ 📂 images
 ┃ ┃ ┣ 📜 animated.svg
 ┃ ┃ ┣ 📜 hello.svg
 ┃ ┃ ┗ 📜 logo.svg
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┃ ┃ ┣ 📜 Loader.jsx
 ┃ ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┃ ┣ 📜 Services.jsx
 ┃ ┃ ┃ ┣ 📜 Transactions.jsx
 ┃ ┃ ┃ ┗ 📜 Welcome.jsx
 ┃ ┃ ┣ 📂 context
 ┃ ┃ ┃ ┗ 📜 TransactionContext.jsx
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┃ ┗ 📜 useFetch.jsx
 ┃ ┃ ┣ 📂 utils
 ┃ ┃ ┃ ┣ 📜 Transactions.json
 ┃ ┃ ┃ ┣ 📜 constants.js
 ┃ ┃ ┃ ┣ 📜 dummyData.js
 ┃ ┃ ┃ ┣ 📜 shortenAddress.js
 ┃ ┃ ┣ 📜 App.jsx
 ┃ ┃ ┣ 📜 favicon.svg
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┣ 📜 logo.svg
 ┃ ┃ ┗ 📜 main.jsx
 ┣ 📂 smart_contract
 ┃ ┣ 📂 contracts
 ┃ ┃ ┗ 📜 Transactions.sol
 ┃ ┣ 📂 scripts
 ┃ ┃ ┗ 📜 deploy.js
 ┃ ┣ 📂 test
 ┃ ┃ ┗ 📜 sample-test.js
 ┃ ┣ 📜 .gitignore
 ┃ ┣ 📜 README.md
 ┃ ┣ 📜 hardhat.config.js
 ┃ ┣ 📜 package-lock.json
 ┃ ┗ 📜 package.json
 ┣ 📜 README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/ShoaibDev69/CoinReach_Project.git
```

2. Move into the project directory

```bash
cd CoinReach_Project
```

3. Install dependencies in client folder

```bash
npm install
```

4. Start the application

```bash
npm start
```

5. Install dependencies in smart_contract folder

```bash
npm install
```

6. Start the application

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Tech Stack

- React
- Solidity
- Hardhat
- Web3.js
- Vercel
- Ethereum
- Git
- GitHub

## What we learned ?

- How to use React Context API to manage global state in a React application. We used the Context API to pass the wallet address to the Ethereum card component. We also used it to pass the transactions to the transactions component. 

- How to use Web3.js library to interact with Ethereum blockchain and smart contracts deployed on it from a web application using Metamask wallet extension for browsers.

- How to use Solidity programming language to write smart contracts for Ethereum blockchain. We used Solidity to write a smart contract that stores the transactions made by the user on the blockchain. 

- How to use Hardhat