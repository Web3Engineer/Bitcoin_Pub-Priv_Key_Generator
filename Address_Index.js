//Install coinkey NPM package:~$ npm i coinkey
const fs = require('fs');
const CoinKey = require('coinkey'); 

function generateKeys(_amountToGen){

const pubArray = [];
const pairArray = [];

function newKeys(){
    let newWallet = new CoinKey.createRandom();
    let pub = newWallet.publicAddress;
    let priv = newWallet.privateKey.toString('hex');
    pubArray.push(pub);
    pairArray.push(`${pub}>${priv}`);
    }

for (i=0; i<_amountToGen; i++){newKeys();}
    
fs.writeFileSync('./pubArray.txt', JSON.stringify(pubArray));
fs.writeFileSync('./pairArray.txt', JSON.stringify(pairArray));

console.log(pubArray);
console.log(pairArray);

}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
generateKeys(1);//The number in the generateKeys() function is how many Bitcoin address' you want to generate 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


///// old notes..
/*
// Constructor function
function Wallet(_pub, _priv) {
    const wallet = {};
    wallet.pub = _pub;
    wallet.priv = _priv;
    return wallet;
  }
  // Creating a new object using the "new" keyword
  const wallet1 = new Wallet(_pub, _priv);
  
  console.log(wallet1.pub); 
  console.log(wallet1.priv); 
  */