require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note spike equip inflict narrow flush sell'; 
let testAccounts = [
"0xa36c54675dfa84d2333ba8b2a9caded1f230ba4f449d0c9f4eb6ac89e950b77c",
"0xa501ed1b1770d4684eba4aaa063dbb591d549327463f024a36649df5ffdd7e08",
"0x94915229dc5fea552cdb4b7fba4d561281cfd83eb870194deee147fe9030753b",
"0x53fc9eafa8138b87fa90e3ad7dddea43dc1a04f49b06ce8d9abc166743480b56",
"0xc55a16842fb8f56a81f5a1cdc347c839bd4cad02c8b0598cecbebc45a01bf2ef",
"0x406107707c104bb47abca8cbe5c9bf9704c631f035857cb979f62b64e47d19e7",
"0xa97c6db2495a66e7787822ae784374f551d7434b54ee65680c4166759cb4213c",
"0x110e6754a0e6a123863ee4e64185bf832ff7b92dd7576ff4ccbdcf2f0a9f9d02",
"0x4dbb6d6cd08701c3765420dc4e97d60e07e3af70cf18d5aee3e56c422e6fec14",
"0x89720f753bc793dda884188ee7d6c646269ad8dfdccb1621dad02ea867d8d3fc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

