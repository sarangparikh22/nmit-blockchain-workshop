const Wallet = require('ethereumjs-wallet')
const hdkey = require('ethereumjs-wallet/hdkey')
const bip39 = require('bip39')
const fs = require('fs')

//Wallet Generation Process

//Generating Mnemonic
const mnemonic = bip39.generateMnemonic();

//Creating HD-Wallet with Mnemonic as Seed
const hdWallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

//Path to Define Constants Realted to Ethereum Addressing 
const path = "m/44'/60'/0'/0/0";

//Generating Wallet
const wallet = hdWallet.derivePath(path).getWallet();

//Encrypting and Saving the Wallet File
const v3 = wallet.toV3('saru');
fs.writeFileSync('safe.wallet',JSON.stringify(v3));

//Testing Only
console.log(`Address: ${wallet.getAddressString()}`);
console.log(`Mneomnic: ${mnemonic}`)


