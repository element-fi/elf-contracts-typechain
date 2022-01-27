"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolFeesCollector__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IVault",
                name: "_vault",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newFlashLoanFeePercentage",
                type: "uint256",
            },
        ],
        name: "FlashLoanFeePercentageChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newSwapFeePercentage",
                type: "uint256",
            },
        ],
        name: "SwapFeePercentageChanged",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "selector",
                type: "bytes4",
            },
        ],
        name: "getActionId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAuthorizer",
        outputs: [
            {
                internalType: "contract IAuthorizer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20[]",
                name: "tokens",
                type: "address[]",
            },
        ],
        name: "getCollectedFeeAmounts",
        outputs: [
            {
                internalType: "uint256[]",
                name: "feeAmounts",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getFlashLoanFeePercentage",
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
        inputs: [],
        name: "getSwapFeePercentage",
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
                internalType: "uint256",
                name: "newFlashLoanFeePercentage",
                type: "uint256",
            },
        ],
        name: "setFlashLoanFeePercentage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newSwapFeePercentage",
                type: "uint256",
            },
        ],
        name: "setSwapFeePercentage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vault",
        outputs: [
            {
                internalType: "contract IVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20[]",
                name: "tokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "withdrawCollectedFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b5060405162001256380380620012568339818101604052810190620000379190620000b7565b3073ffffffffffffffffffffffffffffffffffffffff1660001b80608081815250505060016000819055508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250505062000145565b600081519050620000b1816200012b565b92915050565b600060208284031215620000ca57600080fd5b6000620000da84828501620000a0565b91505092915050565b6000620000f0826200010b565b9050919050565b60006200010482620000e3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200013681620000f7565b81146200014257600080fd5b50565b60805160a05160601c6110e562000171600039806104c9528061060852508061034352506110e56000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063851c1bb311610066578063851c1bb31461010a578063aaabadc51461013a578063d877845c14610158578063e42abf3514610176578063fbfa77cf146101a657610093565b806338e9922e1461009857806355c67628146100b45780636b6b9f69146100d25780636daefab6146100ee575b600080fd5b6100b260048036038101906100ad9190610b83565b6101c4565b005b6100bc610224565b6040516100c99190610e35565b60405180910390f35b6100ec60048036038101906100e79190610b83565b61022e565b005b61010860048036038101906101039190610a15565b61028d565b005b610124600480360381019061011f9190610b08565b61033f565b6040516101319190610dad565b60405180910390f35b610142610391565b60405161014f9190610dff565b60405180910390f35b6101606103a0565b60405161016d9190610e35565b60405180910390f35b610190600480360381019061018b9190610a9e565b6103aa565b60405161019d9190610d8b565b60405180910390f35b6101ae6104c7565b6040516101bb9190610e1a565b60405180910390f35b6101cc6104eb565b6101e36706f05b59d3b20000821115610258610534565b806001819055507fa9ba3ffe0b6c366b81232caab38605a0699ad5398d6cce76f91ee809e322dafc816040516102199190610e35565b60405180910390a150565b6000600154905090565b6102366104eb565b61024c662386f26fc10000821115610259610534565b806002819055507f5a0b7386237e7f07fa741efc64e59c9387d2cccafec760efed4d53387f20e19a816040516102829190610e35565b60405180910390a150565b610295610547565b61029d6104eb565b6102ad8585905084849050610563565b60005b8585905081101561032f5760008686838181106102c957fe5b90506020020160208101906102de9190610b5a565b905060008585848181106102ee57fe5b90506020020135905061032284828473ffffffffffffffffffffffffffffffffffffffff166105749092919063ffffffff16565b50508060010190506102b0565b506103386105fa565b5050505050565b60007f000000000000000000000000000000000000000000000000000000000000000082604051602001610374929190610d04565b604051602081830303815290604052805190602001209050919050565b600061039b610604565b905090565b6000600254905090565b6060815167ffffffffffffffff811180156103c457600080fd5b506040519080825280602002602001820160405280156103f35781602001602082028036833780820191505090505b50905060005b82518110156104c15782818151811061040e57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161044e9190610d47565b60206040518083038186803b15801561046657600080fd5b505afa15801561047a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049e9190610bac565b8282815181106104aa57fe5b6020026020010181815250508060010190506103f9565b50919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061051a6000357fffffffff000000000000000000000000000000000000000000000000000000001661033f565b905061053161052982336106a9565b610191610534565b50565b816105435761054281610747565b5b5050565b61055960026000541415610190610534565b6002600081905550565b6105708183146067610534565b5050565b6105f58363a9059cbb60e01b8484604051602401610593929190610d62565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506107b7565b505050565b6001600081905550565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663aaabadc56040518163ffffffff1660e01b815260040160206040518083038186803b15801561066c57600080fd5b505afa158015610680573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a49190610b31565b905090565b60006106b3610604565b73ffffffffffffffffffffffffffffffffffffffff16639be2a8848484306040518463ffffffff1660e01b81526004016106ef93929190610dc8565b60206040518083038186803b15801561070757600080fd5b505afa15801561071b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073f9190610adf565b905092915050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040516107e09190610d30565b6000604051808303816000865af19150503d806000811461081d576040519150601f19603f3d011682016040523d82523d6000602084013e610822565b606091505b5091509150600082141561083a573d6000803e3d6000fd5b61086560008251148061085d57508180602001905181019061085c9190610adf565b5b6101a2610534565b50505050565b60008135905061087a81611025565b92915050565b60008083601f84011261089257600080fd5b8235905067ffffffffffffffff8111156108ab57600080fd5b6020830191508360208202830111156108c357600080fd5b9250929050565b600082601f8301126108db57600080fd5b81356108ee6108e982610e7d565b610e50565b9150818183526020840193506020810190508385602084028201111561091357600080fd5b60005b83811015610943578161092988826109d6565b845260208401935060208301925050600181019050610916565b5050505092915050565b60008083601f84011261095f57600080fd5b8235905067ffffffffffffffff81111561097857600080fd5b60208301915083602082028301111561099057600080fd5b9250929050565b6000815190506109a68161103c565b92915050565b6000813590506109bb81611053565b92915050565b6000815190506109d08161106a565b92915050565b6000813590506109e581611081565b92915050565b6000813590506109fa81611098565b92915050565b600081519050610a0f81611098565b92915050565b600080600080600060608688031215610a2d57600080fd5b600086013567ffffffffffffffff811115610a4757600080fd5b610a5388828901610880565b9550955050602086013567ffffffffffffffff811115610a7257600080fd5b610a7e8882890161094d565b93509350506040610a918882890161086b565b9150509295509295909350565b600060208284031215610ab057600080fd5b600082013567ffffffffffffffff811115610aca57600080fd5b610ad6848285016108ca565b91505092915050565b600060208284031215610af157600080fd5b6000610aff84828501610997565b91505092915050565b600060208284031215610b1a57600080fd5b6000610b28848285016109ac565b91505092915050565b600060208284031215610b4357600080fd5b6000610b51848285016109c1565b91505092915050565b600060208284031215610b6c57600080fd5b6000610b7a848285016109d6565b91505092915050565b600060208284031215610b9557600080fd5b6000610ba3848285016109eb565b91505092915050565b600060208284031215610bbe57600080fd5b6000610bcc84828501610a00565b91505092915050565b6000610be18383610ce6565b60208301905092915050565b610bf681610ef4565b82525050565b6000610c0782610eb5565b610c118185610ed8565b9350610c1c83610ea5565b8060005b83811015610c4d578151610c348882610bd5565b9750610c3f83610ecb565b925050600181019050610c20565b5085935050505092915050565b610c6381610f12565b82525050565b610c7a610c7582610f12565b611011565b82525050565b610c91610c8c82610f1c565b61101b565b82525050565b6000610ca282610ec0565b610cac8185610ee9565b9350610cbc818560208601610fde565b80840191505092915050565b610cd181610f96565b82525050565b610ce081610fba565b82525050565b610cef81610f8c565b82525050565b610cfe81610f8c565b82525050565b6000610d108285610c69565b602082019150610d208284610c80565b6004820191508190509392505050565b6000610d3c8284610c97565b915081905092915050565b6000602082019050610d5c6000830184610bed565b92915050565b6000604082019050610d776000830185610bed565b610d846020830184610cf5565b9392505050565b60006020820190508181036000830152610da58184610bfc565b905092915050565b6000602082019050610dc26000830184610c5a565b92915050565b6000606082019050610ddd6000830186610c5a565b610dea6020830185610bed565b610df76040830184610bed565b949350505050565b6000602082019050610e146000830184610cc8565b92915050565b6000602082019050610e2f6000830184610cd7565b92915050565b6000602082019050610e4a6000830184610cf5565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610e7357600080fd5b8060405250919050565b600067ffffffffffffffff821115610e9457600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b6000610eff82610f6c565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000610f5382610ef4565b9050919050565b6000610f6582610ef4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610fa182610fa8565b9050919050565b6000610fb382610f6c565b9050919050565b6000610fc582610fcc565b9050919050565b6000610fd782610f6c565b9050919050565b60005b83811015610ffc578082015181840152602081019050610fe1565b8381111561100b576000848401525b50505050565b6000819050919050565b6000819050919050565b61102e81610ef4565b811461103957600080fd5b50565b61104581610f06565b811461105057600080fd5b50565b61105c81610f1c565b811461106757600080fd5b50565b61107381610f48565b811461107e57600080fd5b50565b61108a81610f5a565b811461109557600080fd5b50565b6110a181610f8c565b81146110ac57600080fd5b5056fea2646970667358221220274424e206f3f502524686025d323612fcc1cc3eba60e362dad101a58d19b81364736f6c63430007010033";
const isSuperArgs = (xs) => xs.length > 1;
class ProtocolFeesCollector__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_vault, overrides) {
        return super.deploy(_vault, overrides || {});
    }
    getDeployTransaction(_vault, overrides) {
        return super.getDeployTransaction(_vault, overrides || {});
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
exports.ProtocolFeesCollector__factory = ProtocolFeesCollector__factory;
ProtocolFeesCollector__factory.bytecode = _bytecode;
ProtocolFeesCollector__factory.abi = _abi;
