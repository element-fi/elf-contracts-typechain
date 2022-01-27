"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAssetTransfersHandler__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IWETH",
                name: "weth",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "depositToInternalBalance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
        ],
        name: "getInternalBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IAsset",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "bool",
                name: "fromInternalBalance",
                type: "bool",
            },
        ],
        name: "receiveAsset",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IAsset",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "bool",
                name: "toInternalBalance",
                type: "bool",
            },
        ],
        name: "sendAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60a060405234801561001057600080fd5b50604051610f56380380610f5683398181016040528101906100329190610086565b808073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505061010a565b600081519050610080816100f3565b92915050565b60006020828403121561009857600080fd5b60006100a684828501610071565b91505092915050565b60006100ba826100d3565b9050919050565b60006100cc826100af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100fc816100c1565b811461010757600080fd5b50565b60805160601c610e2f6101276000398061013f5250610e2f6000f3fe6080604052600436106100435760003560e01c80631f51af7d146100905780638a65d2e0146100b957806390c185ae146100f6578063e65f97021461011f5761008b565b3661008b5761008961005361013b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610206610163565b005b600080fd5b34801561009c57600080fd5b506100b760048036038101906100b29190610ad2565b610176565b005b3480156100c557600080fd5b506100e060048036038101906100db9190610a1e565b610188565b6040516100ed9190610c8d565b60405180910390f35b34801561010257600080fd5b5061011d60048036038101906101189190610a5a565b61020e565b005b61013960048036038101906101349190610b35565b61024b565b005b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b81610172576101718161025d565b5b5050565b610182848484846102cd565b50505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61023b8330838573ffffffffffffffffffffffffffffffffffffffff166103ee909392919063ffffffff16565b610246838383610477565b505050565b61025784848484610505565b50505050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b60008314156102db576103e8565b6102e484610615565b15610396576102f68115610202610163565b6102fe61013b565b73ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d846040518263ffffffff1660e01b81526004016103369190610c8d565b600060405180830381600087803b15801561035057600080fd5b505af1158015610364573d6000803e3d6000fd5b50505050610391838373ffffffffffffffffffffffffffffffffffffffff1661064d90919063ffffffff16565b6103e7565b60006103a1856106d9565b905081156103b9576103b4838286610477565b6103e5565b6103e483858373ffffffffffffffffffffffffffffffffffffffff166106e39092919063ffffffff16565b5b505b5b50505050565b610471846323b872dd60e01b85858560405160240161040f93929190610c2d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610769565b50505050565b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505050565b60008314156105135761060f565b61051c84610615565b156105aa5761052e8115610202610163565b61053d83471015610204610163565b61054561013b565b73ffffffffffffffffffffffffffffffffffffffff1663d0e30db0846040518263ffffffff1660e01b81526004016000604051808303818588803b15801561058c57600080fd5b505af11580156105a0573d6000803e3d6000fd5b505050505061060e565b60006105b5856106d9565b905081156105d55760006105cc848387600161081d565b90508085039450505b600084111561060c5761060b8330868473ffffffffffffffffffffffffffffffffffffffff166103ee909392919063ffffffff16565b5b505b5b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b61065c814710156101a3610163565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161068290610c18565b60006040518083038185875af1925050503d80600081146106bf576040519150601f19603f3d011682016040523d82523d6000602084013e6106c4565b606091505b505090506106d4816101a4610163565b505050565b6000819050919050565b6107648363a9059cbb60e01b8484604051602401610702929190610c64565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610769565b505050565b600060608373ffffffffffffffffffffffffffffffffffffffff16836040516107929190610c01565b6000604051808303816000865af19150503d80600081146107cf576040519150601f19603f3d011682016040523d82523d6000602084013e6107d4565b606091505b509150915060008214156107ec573d6000803e3d6000fd5b61081760008251148061080f57508180602001905181019061080e9190610aa9565b5b6101a2610163565b50505050565b6000806000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050826108a957836108b4565b6108b38185610951565b5b91506108c9828261096a90919063ffffffff16565b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050949350505050565b60008183106109605781610962565b825b905092915050565b600061097a838311156001610163565b600082840390508091505092915050565b60008135905061099a81610d6f565b92915050565b6000813590506109af81610d86565b92915050565b6000813590506109c481610d9d565b92915050565b6000815190506109d981610d9d565b92915050565b6000813590506109ee81610db4565b92915050565b600081359050610a0381610dcb565b92915050565b600081359050610a1881610de2565b92915050565b60008060408385031215610a3157600080fd5b6000610a3f8582860161098b565b9250506020610a50858286016109f4565b9150509250929050565b600080600060608486031215610a6f57600080fd5b6000610a7d8682870161098b565b9350506020610a8e868287016109f4565b9250506040610a9f86828701610a09565b9150509250925092565b600060208284031215610abb57600080fd5b6000610ac9848285016109ca565b91505092915050565b60008060008060808587031215610ae857600080fd5b6000610af6878288016109df565b9450506020610b0787828801610a09565b9350506040610b18878288016109a0565b9250506060610b29878288016109b5565b91505092959194509250565b60008060008060808587031215610b4b57600080fd5b6000610b59878288016109df565b9450506020610b6a87828801610a09565b9350506040610b7b8782880161098b565b9250506060610b8c878288016109b5565b91505092959194509250565b610ba181610cbe565b82525050565b6000610bb282610ca8565b610bbc8185610cb3565b9350610bcc818560208601610d3c565b80840191505092915050565b6000610be5600083610cb3565b9150600082019050919050565b610bfb81610d32565b82525050565b6000610c0d8284610ba7565b915081905092915050565b6000610c2382610bd8565b9150819050919050565b6000606082019050610c426000830186610b98565b610c4f6020830185610b98565b610c5c6040830184610bf2565b949350505050565b6000604082019050610c796000830185610b98565b610c866020830184610bf2565b9392505050565b6000602082019050610ca26000830184610bf2565b92915050565b600081519050919050565b600081905092915050565b6000610cc982610d12565b9050919050565b6000610cdb82610d12565b9050919050565b60008115159050919050565b6000610cf982610cbe565b9050919050565b6000610d0b82610cbe565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610d5a578082015181840152602081019050610d3f565b83811115610d69576000848401525b50505050565b610d7881610cbe565b8114610d8357600080fd5b50565b610d8f81610cd0565b8114610d9a57600080fd5b50565b610da681610ce2565b8114610db157600080fd5b50565b610dbd81610cee565b8114610dc857600080fd5b50565b610dd481610d00565b8114610ddf57600080fd5b50565b610deb81610d32565b8114610df657600080fd5b5056fea2646970667358221220dde8c558c7a1b8a68003b89d56d91fd6850f4f4d6dabb0acd00962b10fe5f91b64736f6c63430007010033";
const isSuperArgs = (xs) => xs.length > 1;
class MockAssetTransfersHandler__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(weth, overrides) {
        return super.deploy(weth, overrides || {});
    }
    getDeployTransaction(weth, overrides) {
        return super.getDeployTransaction(weth, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockAssetTransfersHandler__factory = MockAssetTransfersHandler__factory;
MockAssetTransfersHandler__factory.bytecode = _bytecode;
MockAssetTransfersHandler__factory.abi = _abi;
