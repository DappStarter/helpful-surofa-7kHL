require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth soccer purity hunt credit equal gesture'; 
let testAccounts = [
"0x2767d113050795a266c6c70387360ed216a7becfc8fc6a498759e4aa0eead6c5",
"0x46fde1c494e66c25f6c5789dcb3ea7a9734b9c936f57097754192e803ff7ac71",
"0x5bd01a8cf276f16746745b0141b3ef3d92dc2099831464df0acf9b071391d0e6",
"0xbd5867e771ac6540568aed4b3fd5857e388284ea5c7aa4f17da0ef48c58bb295",
"0xcc7018aaa469a4ab9d759ad108028a038f5764808afaa56bfcecca248374da8b",
"0xc8e3f804d7712342b8d1ad26556efdf7f657133016d1d4182ba97ed29db726ff",
"0x2891b6131c5b498ca100a6d9887dfac3113df392adfd8cbdcb719826326d7c44",
"0xb1cf2ee6d157f4abd7ad9a04459f01140f4b508bdc8362f3a2f9db35900d090e",
"0x62611240df2c713b4801a1f9ac706e4f45362f938c038da45ba217f030d82848",
"0x8a7ba45e0117d78f8af530d4a41cbb316b42bfa6a49e5e6314550f98ae1d65ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

