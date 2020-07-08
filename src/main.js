const EC = require('elliptic').ec;
const { Blockchain, Transaction } = require('./blockchain');

const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('7d2778d6a19a280298136f2b2351d87f748dfee635936452197bd7860d125626');
const myWalletAddress = myKey.getPublic('hex');

//cria a cadeia
let coin = new Blockchain();

// coin.addTransaction(new Transaction(null, myWalletAddress, 1000));
// coin.addTransaction(new Transaction('address2', 'address1', 40));

const tx1 = new Transaction(myWalletAddress, 'other wallet 1', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log('\nStarting the miner...');
coin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of myWallet is: '+coin.getBalanceOfAddress(myWalletAddress));
//coin.chain[1].transactions[0].amount = 1000;
console.log('Is chain valid?', coin.isChainValid());
/*
console.log('\nStarting the miner...');
coin.minePendingTransactions('address3');
console.log('\nBalance of address3 is: '+coin.getBalanceOfAddress('address3'));

console.log('\nStarting the miner again...');
coin.minePendingTransactions('address3');
console.log('\nBalance of address3 is: '+coin.getBalanceOfAddress('address3'));
*/
// console.log('Mining block 1...');
// coin.addBlock(new Block(1, '01/07/2020', { from: 'Marcio', to: 'Tatiana', amount: 4 }));
// console.log('Mining block 2...');
// coin.addBlock(new Block(2, '21/07/2020', { from: 'Tatiana', to: 'Matheus', amount: 10 }));
// coin.addBlock(new Block(3, '22/07/2020', { from: 'Matheus', to: 'Marcio', amount: 1 }));


// console.log(JSON.stringify(coin, null, 4));
// console.log('Is blockchain valid? '+coin.isChainValid());

// coin.chain[1].data = { from: 'Marcio', to: 'Tatiana', amount: 400 };
// coin.chain[1].hash = coin.chain[1].calculateHash();

// console.log('Is blockchain valid? '+coin.isChainValid());
// console.log(JSON.stringify(coin, null, 4));
