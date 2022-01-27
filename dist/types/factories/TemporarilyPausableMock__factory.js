"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporarilyPausableMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pauseWindowDuration",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bufferPeriodDuration",
                type: "uint256",
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
                internalType: "bool",
                name: "paused",
                type: "bool",
            },
        ],
        name: "PausedStateChanged",
        type: "event",
    },
    {
        inputs: [],
        name: "getPausedState",
        outputs: [
            {
                internalType: "bool",
                name: "paused",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "pauseWindowEndTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bufferPeriodEndTime",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "paused",
                type: "bool",
            },
        ],
        name: "setPaused",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b506040516103d83803806103d88339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505081816100686276a7008311156101946100a360201b60201c565b61008062278d008211156101956100a360201b60201c565b60008242019050806080818152505081810160a08181525050505050505061012c565b816100b8576100b7816100bc60201b60201c565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b60805160a05161028961014f600039806101ac52508061018452506102896000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806316c38b3c1461003b5780631c0de0511461006b575b600080fd5b6100696004803603602081101561005157600080fd5b81019080803515159060200190929190505050610099565b005b6100736100a5565b604051808415158152602001838152602001828152602001935050505060405180910390f35b6100a2816100ce565b50565b60008060006100b2610159565b1592506100bd610180565b91506100c76101a8565b9050909192565b80156100ee576100e96100df610180565b42106101936101d0565b610104565b6101036100f96101a8565b42106101a96101d0565b5b806000806101000a81548160ff0219169083151502179055507f9e3a5e37224532dea67b89face185703738a228a6e8a23dee546960180d3be648160405180821515815260200191505060405180910390a150565b60006101636101a8565b42118061017b575060008054906101000a900460ff16155b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b816101df576101de816101e3565b5b5050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea2646970667358221220978e509dccd3349a4c0cf588412e5acec6678df8413143c632c5f6bd005e55d064736f6c63430007010033";
const isSuperArgs = (xs) => xs.length > 1;
class TemporarilyPausableMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(pauseWindowDuration, bufferPeriodDuration, overrides) {
        return super.deploy(pauseWindowDuration, bufferPeriodDuration, overrides || {});
    }
    getDeployTransaction(pauseWindowDuration, bufferPeriodDuration, overrides) {
        return super.getDeployTransaction(pauseWindowDuration, bufferPeriodDuration, overrides || {});
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
exports.TemporarilyPausableMock__factory = TemporarilyPausableMock__factory;
TemporarilyPausableMock__factory.bytecode = _bytecode;
TemporarilyPausableMock__factory.abi = _abi;
