# Smart contract blueprint

This project demonstrates how to develop smart contract and deploy it to Ethereum blockchain.

Running smart contract on rinkeby network: https://rinkeby.etherscan.io/address/0x8c3921dc6258baf86fe4ae4a0bc2180609976cb3

## Requirements

For the purpose of making this smart contract blueprint I have used these tools:

```
node.js 12.18.3
npm 6.14.6
```

To create this blueprint I have worked on Windows 10 and used Git Bash as command prompt.

## Project structure

Most

* `contracts/` <- Directory where smart contracts' source code is placed.

* `package.json` <- Commands we are going to use. You are gonna make changes to them.

* `secrets.json` <- Third party tools' credentials to fill in.

* `src/` <- Node app which is going to interact with deployed smart contract.

## Prepare environment

Install dependencies and check everything is ready to development:

```
npm i
npm test
```

After you made changes to snart contract's source code then we can deploy it to local blockchain node called ganache.

**Making local blockchain node up and running:**

***Note:*** *Please do that in separate instance of terminal cause ganache locks input after start.*

```
npx ganache-cli --deterministic
```

**Compile contract(s):**

```
npm run compile
```

**Deploy contract to local blockchain node:**

Before you go forward remember to specify contract name you want to deploy in `package.json` file under section `npm run deploy:dev` then execute command:

```
npm run deploy:dev
```

In the end of this process you should see address of newly deployed smart contract. 

```
- Deployed instance of Box
0x5b1869D9A4C187F2EAa108f3062412ecf0526b24
```

## Interacting with smart contract programically

There is small application located under `src/` directory which stands as a showcase of how we can communicate with smart contract from code point of view.

***Important note:*** *Copy deployed smart contract address' assign it to `address` constans in `src/app/index.js` file.*

**Launching app:**

```
node ./src/app/index.js

Box value is 20
```

If you see such output in your terminal it means smart contract is deployed on local network and is accessible from node application.

## Deploying smart contract to public network

***Note:*** *In purpose of this guide I decided to publish contract in rinkeby public test network.* 

Before we start deployment process of smart contract to public network we have to make sure that we have prepared required given:

* Infura Project ID - https://infura.io
* Ethereum wallet in public network - https://metamask.io
* Ethers on wallet to deploy contract - https://faucet.rinkeby.io
* *Optional* Etherscan API key - https://etherscan.io/myapikey

With those data prepared we can back to `secret.json` file and fill out required data.

**Start deployment:**

```
npm run deploy:public:rinkeby
```

In the end of this process you should see newly deployed to public test network smart contract's address.

```
- Deployed instance of Box
0x8C3921dC6258BAf86fE4aE4A0bC2180609976cB3
```

This means our smart contract is deployed and accessible globally to every user. You can also view your smart contract in block explorer: https://rinkeby.etherscan.io/address/0x8c3921dc6258baf86fe4ae4a0bc2180609976cb3

**Smart contract verification**

***Note:*** *This point is optional and up to you. You can verify created smart contract and by that give users to view smart contract's source code. I encourage you to do that cause verification allows users to interact with smart contract via Etherscan. Here you can interact with smart contract of this blueprint: https://rinkeby.etherscan.io/address/0x8c3921dc6258baf86fe4ae4a0bc2180609976cb3#code*

In order to verify smart contract change this address `Box@0x8C3921dC6258BAf86fE4aE4A0bC2180609976cB3` with your deployed smart contract's address.

After that execute command:

```
npm run verify:public:rinkeby
```

In the end you should see:
```
Pass - Verified: https://rinkeby.etherscan.io/address/0x8C3921dC6258BAf86fE4aE4A0bC2180609976cB3#contracts
Successfully verified 1 contract(s).
```