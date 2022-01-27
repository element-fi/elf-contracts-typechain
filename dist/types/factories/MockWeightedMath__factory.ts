/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockWeightedMath,
  MockWeightedMathInterface,
} from "../MockWeightedMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "bptInForExactTokensOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "normalizedWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "previousInvariant",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentInvariant",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256",
      },
    ],
    name: "calculateDueTokenProtocolSwapFeeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenNormalizedWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "exactBPTInForTokenOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "bptAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBPT",
        type: "uint256",
      },
    ],
    name: "exactBPTInForTokensOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "exactTokensInForBPTOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
    ],
    name: "inGivenOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    name: "invariant",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
    ],
    name: "outGivenIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenNormalizedWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bptTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "tokenInForExactBPTOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506125b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063567853711161006657806356785371146104955780635b55b24a146105f557806398f59bca1461065f578063c2546cc314610867578063fab3b9d7146108d157610093565b80631b02e9a8146100985780631c855fa6146101025780632e752149146102235780634b114ddf1461042b575b600080fd5b6100ec600480360360a08110156100ae57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919050505061093b565b6040518082815260200191505060405180910390f35b6101cc6004803603606081101561011857600080fd5b810190808035906020019064010000000081111561013557600080fd5b82018360208201111561014757600080fd5b8035906020019184602083028401116401000000008311171561016957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919080359060200190929190505050610955565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561020f5780820151818401526020810190506101f4565b505050509050019250505060405180910390f35b610415600480360360a081101561023957600080fd5b810190808035906020019064010000000081111561025657600080fd5b82018360208201111561026857600080fd5b8035906020019184602083028401116401000000008311171561028a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156102ea57600080fd5b8201836020820111156102fc57600080fd5b8035906020019184602083028401116401000000008311171561031e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561037e57600080fd5b82018360208201111561039057600080fd5b803590602001918460208302840111640100000000831117156103b257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019092919050505061096b565b6040518082815260200191505060405180910390f35b61047f600480360360a081101561044157600080fd5b810190808035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610985565b6040518082815260200191505060405180910390f35b6105df600480360360408110156104ab57600080fd5b81019080803590602001906401000000008111156104c857600080fd5b8201836020820111156104da57600080fd5b803590602001918460208302840111640100000000831117156104fc57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561055c57600080fd5b82018360208201111561056e57600080fd5b8035906020019184602083028401116401000000008311171561059057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929050505061099f565b6040518082815260200191505060405180910390f35b610649600480360360a081101561060b57600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291905050506109b3565b6040518082815260200191505060405180910390f35b610851600480360360a081101561067557600080fd5b810190808035906020019064010000000081111561069257600080fd5b8201836020820111156106a457600080fd5b803590602001918460208302840111640100000000831117156106c657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561072657600080fd5b82018360208201111561073857600080fd5b8035906020019184602083028401116401000000008311171561075a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107ba57600080fd5b8201836020820111156107cc57600080fd5b803590602001918460208302840111640100000000831117156107ee57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291905050506109cd565b6040518082815260200191505060405180910390f35b6108bb600480360360a081101561087d57600080fd5b8101908080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291905050506109e7565b6040518082815260200191505060405180910390f35b610925600480360360a08110156108e757600080fd5b810190808035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610a01565b6040518082815260200191505060405180910390f35b600061094a8686868686610a1b565b905095945050505050565b6060610962848484610ade565b90509392505050565b600061097a8686868686610ba7565b905095945050505050565b60006109948686868686610ec6565b905095945050505050565b60006109ab8383610f77565b905092915050565b60006109c28686868686611000565b905095945050505050565b60006109dc868686868661110a565b905095945050505050565b60006109f686868686866113d7565b905095945050505050565b6000610a1086868686866114f3565b905095945050505050565b6000610a46610a3b670429d069189e0000866115a890919063ffffffff16565b8311156101316115ec565b6000610a6d610a5e84876115ff90919063ffffffff16565b8661162090919063ffffffff16565b90506000610a84878661162090919063ffffffff16565b90506000610a9b828461168a90919063ffffffff16565b90506000610aba670de0b6b3a7640000836115ff90919063ffffffff16565b9050610acf818b6116c790919063ffffffff16565b94505050505095945050505050565b60606000610af5838561172590919063ffffffff16565b90506060855167ffffffffffffffff81118015610b1157600080fd5b50604051908082528060200260200182016040528015610b405781602001602082028036833780820191505090505b50905060005b8651811015610b9a57610b7583888381518110610b5f57fe5b60200260200101516115a890919063ffffffff16565b828281518110610b8157fe5b6020026020010181815250508080600101915050610b46565b5080925050509392505050565b60006060845167ffffffffffffffff81118015610bc357600080fd5b50604051908082528060200260200182016040528015610bf25781602001602082028036833780820191505090505b5090506000805b8851811015610cd257610c60898281518110610c1157fe5b6020026020010151610c52898481518110610c2857fe5b60200260200101518c8581518110610c3c57fe5b602002602001015161178990919063ffffffff16565b61172590919063ffffffff16565b838281518110610c6c57fe5b602002602001018181525050610cc3610cb4898381518110610c8a57fe5b6020026020010151858481518110610c9e57fe5b60200260200101516115a890919063ffffffff16565b8361178990919063ffffffff16565b91508080600101915050610bf9565b506000670de0b6b3a7640000905060005b8951811015610e6e57600083858381518110610cfb57fe5b60200260200101511115610dbf576000610d4b610d29670de0b6b3a7640000876115ff90919063ffffffff16565b8d8581518110610d3557fe5b60200260200101516115a890919063ffffffff16565b90506000610d75828c8681518110610d5f57fe5b60200260200101516115ff90919063ffffffff16565b9050610db6610da7610d988b670de0b6b3a76400006115ff90919063ffffffff16565b836115a890919063ffffffff16565b8361178990919063ffffffff16565b92505050610dd6565b888281518110610dcb57fe5b602002602001015190505b6000610e238c8481518110610de757fe5b6020026020010151610e15848f8781518110610dff57fe5b602002602001015161178990919063ffffffff16565b61172590919063ffffffff16565b9050610e5d610e4e8c8581518110610e3757fe5b6020026020010151836117a990919063ffffffff16565b856115a890919063ffffffff16565b935050508080600101915050610ce3565b50670de0b6b3a76400008110610eb557610eab610e9c670de0b6b3a7640000836115ff90919063ffffffff16565b876115a890919063ffffffff16565b9350505050610ebd565b600093505050505b95945050505050565b6000610ef1610ee6670429d069189e0000886115a890919063ffffffff16565b8311156101306115ec565b6000610f06838861178990919063ffffffff16565b90506000610f1d828961162090919063ffffffff16565b90506000610f34868961172590919063ffffffff16565b90506000610f4b828461168a90919063ffffffff16565b9050610f68610f59826117fa565b896115a890919063ffffffff16565b94505050505095945050505050565b6000670de0b6b3a7640000905060005b8351811015610fea57610fdb610fcc858381518110610fa257fe5b6020026020010151858481518110610fb657fe5b60200260200101516117a990919063ffffffff16565b836115a890919063ffffffff16565b91508080600101915050610f87565b50610ffa600082116101376115ec565b92915050565b6000806110288461101a87876115ff90919063ffffffff16565b61162090919063ffffffff16565b90506110416709b6e64a8ec600008210156101326115ec565b600061107061106188670de0b6b3a764000061172590919063ffffffff16565b8361168a90919063ffffffff16565b9050600061108f611080836117fa565b8a6115a890919063ffffffff16565b9050600061109c896117fa565b905060006110b382846116c790919063ffffffff16565b905060006110ca82856115ff90919063ffffffff16565b90506110f96110ea6110db8a6117fa565b846115a890919063ffffffff16565b8261178990919063ffffffff16565b965050505050505095945050505050565b60006060845167ffffffffffffffff8111801561112657600080fd5b506040519080825280602002602001820160405280156111555781602001602082028036833780820191505090505b5090506000805b8851811015611235576111c389828151811061117457fe5b60200260200101516111b589848151811061118b57fe5b60200260200101518c858151811061119f57fe5b60200260200101516115ff90919063ffffffff16565b61162090919063ffffffff16565b8382815181106111cf57fe5b6020026020010181815250506112266112178983815181106111ed57fe5b602002602001015185848151811061120157fe5b60200260200101516116c790919063ffffffff16565b8361178990919063ffffffff16565b9150808060010191505061115c565b506000670de0b6b3a7640000905060005b89518110156113ad57600084828151811061125d57fe5b60200260200101518411156112fe57600061129c61127a866117fa565b8d858151811061128657fe5b60200260200101516115a890919063ffffffff16565b905060006112c6828c86815181106112b057fe5b60200260200101516115ff90919063ffffffff16565b90506112f56112e66112d78b6117fa565b8361162090919063ffffffff16565b8361178990919063ffffffff16565b92505050611315565b88828151811061130a57fe5b602002602001015190505b60006113628c848151811061132657fe5b6020026020010151611354848f878151811061133e57fe5b60200260200101516115ff90919063ffffffff16565b61172590919063ffffffff16565b905061139c61138d8c858151811061137657fe5b6020026020010151836117a990919063ffffffff16565b856115a890919063ffffffff16565b935050508080600101915050611246565b506113c96113ba826117fa565b876116c790919063ffffffff16565b935050505095945050505050565b6000806113ff846113f1878761178990919063ffffffff16565b61162090919063ffffffff16565b90506114186729a2241af62c00008211156101336115ec565b600061144761143888670de0b6b3a764000061162090919063ffffffff16565b8361168a90919063ffffffff16565b90506000611478611469670de0b6b3a7640000846115ff90919063ffffffff16565b8a6116c790919063ffffffff16565b90506000611485896117fa565b9050600061149c82846116c790919063ffffffff16565b905060006114b382856115ff90919063ffffffff16565b90506114e26114d36114c48a6117fa565b8461162090919063ffffffff16565b8261178990919063ffffffff16565b965050505050505095945050505050565b6000838311611505576000905061159f565b600061151a848661162090919063ffffffff16565b9050600061153987670de0b6b3a764000061172590919063ffffffff16565b905061154d826709b6e64a8ec60000611825565b91506000611564828461168a90919063ffffffff16565b90506000611583611574836117fa565b8b6115a890919063ffffffff16565b905061159886826115a890919063ffffffff16565b9450505050505b95945050505050565b60008082840290506115d160008514806115ca5750838583816115c757fe5b04145b60036115ec565b670de0b6b3a764000081816115e257fe5b0491505092915050565b816115fb576115fa8161183f565b5b5050565b600061160f8383111560016115ec565b600082840390508091505092915050565b6000611631600083141560046115ec565b60008314156116435760009050611684565b6000670de0b6b3a764000084029050611670670de0b6b3a764000085838161166757fe5b041460056115ec565b600183600183038161167e57fe5b04019150505b92915050565b60008061169784846118af565b905060006116b16116aa836127106116c7565b6001611789565b90506116bd8282611789565b9250505092915050565b60008082840290506116f060008514806116e95750838583816116e657fe5b04145b60036115ec565b600081141561170357600091505061171f565b6001670de0b6b3a7640000600183038161171957fe5b04019150505b92915050565b6000611736600083141560046115ec565b60008314156117485760009050611783565b6000670de0b6b3a764000084029050611775670de0b6b3a764000085838161176c57fe5b041460056115ec565b82818161177e57fe5b049150505b92915050565b600080828401905061179f8482101560006115ec565b8091505092915050565b6000806117b684846118af565b905060006117d06117c9836127106116c7565b6001611789565b9050808210156117e5576000925050506117f4565b6117ef82826115ff565b925050505b92915050565b6000670de0b6b3a7640000821061181257600061181e565b81670de0b6b3a7640000035b9050919050565b6000818310156118355781611837565b825b905092915050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b6000808214156118c957670de0b6b3a76400009050611a4d565b60008314156118db5760009050611a4d565b6119087f8000000000000000000000000000000000000000000000000000000000000000841060066115ec565b600083905061194c68056bc75e2d631000007f40000000000000000000000000000000000000000000000000000000000000008161194257fe5b04841060076115ec565b600083905060008267016345785d8a0000670de0b6b3a764000003128015611985575067016345785d8a0000670de0b6b3a76400000183125b156119d957600061199584611a53565b9050670de0b6b3a764000083670de0b6b3a764000083816119b257fe5b0702816119bb57fe5b0583670de0b6b3a764000083816119ce57fe5b0502019150506119e7565b816119e384611c00565b0290505b670de0b6b3a764000081816119f857fe5b059050611a3e817ffffffffffffffffffffffffffffffffffffffffffffffffdc702bd3a30fc000013158015611a37575068070c1cc73b00c800008213155b60086115ec565b611a4781612097565b93505050505b92915050565b6000670de0b6b3a76400008202915060006ec097ce7bc90715b34b9f100000000083016ec097ce7bc90715b34b9f10000000008085030281611a9157fe5b05905060006ec097ce7bc90715b34b9f100000000082830281611ab057fe5b059050600082905060008190506ec097ce7bc90715b34b9f100000000083830281611ad757fe5b05915060038281611ae457fe5b05810190506ec097ce7bc90715b34b9f100000000083830281611b0357fe5b05915060058281611b1057fe5b05810190506ec097ce7bc90715b34b9f100000000083830281611b2f57fe5b05915060078281611b3c57fe5b05810190506ec097ce7bc90715b34b9f100000000083830281611b5b57fe5b05915060098281611b6857fe5b05810190506ec097ce7bc90715b34b9f100000000083830281611b8757fe5b059150600b8281611b9457fe5b05810190506ec097ce7bc90715b34b9f100000000083830281611bb357fe5b059150600d8281611bc057fe5b05810190506ec097ce7bc90715b34b9f100000000083830281611bdf57fe5b059150600f8281611bec57fe5b058101905060028102945050505050919050565b6000670de0b6b3a7640000821215611c3857611c2e82670de0b6b3a7640000800281611c2857fe5b05611c00565b6000039050612092565b6000670de0b6b3a7640000770195e54c5dd42177f53a27172fa9ec630262827000000000028312611c9657770195e54c5dd42177f53a27172fa9ec6302628270000000008381611c8457fe5b0592506806f05b59d3b2000000810190505b670de0b6b3a76400006b1425982cf597cd205cef7380028312611cda576b1425982cf597cd205cef73808381611cc857fe5b0592506803782dace9d9000000810190505b6064810290506064830292506e01855144814a7ff805980ff00840008312611d31576e01855144814a7ff805980ff008400068056bc75e2d63100000840281611d1f57fe5b05925068ad78ebc5ac62000000810190505b6b02df0ab5a80a22c61ab5a7008312611d76576b02df0ab5a80a22c61ab5a70068056bc75e2d63100000840281611d6457fe5b0592506856bc75e2d631000000810190505b693f1fce3da636ea5cf8508312611db757693f1fce3da636ea5cf85068056bc75e2d63100000840281611da557fe5b059250682b5e3af16b18800000810190505b690127fa27722cc06cc5e28312611df857690127fa27722cc06cc5e268056bc75e2d63100000840281611de657fe5b0592506815af1d78b58c400000810190505b68280e60114edb805d038312611e375768280e60114edb805d0368056bc75e2d63100000840281611e2557fe5b059250680ad78ebc5ac6200000810190505b680ebc5fb417461211108312611e7657680ebc5fb4174612111068056bc75e2d63100000840281611e6457fe5b05925068056bc75e2d63100000810190505b6808f00f760a4b2db55d8312611eb5576808f00f760a4b2db55d68056bc75e2d63100000840281611ea357fe5b0592506802b5e3af16b1880000810190505b6806f5f17757889379378312611ef4576806f5f177578893793768056bc75e2d63100000840281611ee257fe5b05925068015af1d78b58c40000810190505b6806248f33704b2866038312611f32576806248f33704b28660368056bc75e2d63100000840281611f2157fe5b05925067ad78ebc5ac620000810190505b6805c548670b9510e7ac8312611f70576805c548670b9510e7ac68056bc75e2d63100000840281611f5f57fe5b0592506756bc75e2d6310000810190505b600068056bc75e2d63100000840168056bc75e2d631000008086030281611f9357fe5b059050600068056bc75e2d6310000082830281611fac57fe5b0590506000829050600081905068056bc75e2d6310000083830281611fcd57fe5b05915060038281611fda57fe5b058101905068056bc75e2d6310000083830281611ff357fe5b0591506005828161200057fe5b058101905068056bc75e2d631000008383028161201957fe5b0591506007828161202657fe5b058101905068056bc75e2d631000008383028161203f57fe5b0591506009828161204c57fe5b058101905068056bc75e2d631000008383028161206557fe5b059150600b828161207257fe5b058101905060028102905060648186018161208957fe5b05955050505050505b919050565b60006120dc7ffffffffffffffffffffffffffffffffffffffffffffffffdc702bd3a30fc000083121580156120d5575068070c1cc73b00c800008313155b60096115ec565b600082121561210b576120f182600003612097565b670de0b6b3a764000080028161210357fe5b05905061257c565b60006806f05b59d3b2000000831261214b576806f05b59d3b200000083039250770195e54c5dd42177f53a27172fa9ec6302628270000000009050612183565b6803782dace9d9000000831261217d576803782dace9d9000000830392506b1425982cf597cd205cef73809050612182565b600190505b5b606483029250600068056bc75e2d63100000905068ad78ebc5ac6200000084126121dc5768ad78ebc5ac620000008403935068056bc75e2d631000006e01855144814a7ff805980ff00840008202816121d857fe5b0590505b6856bc75e2d631000000841261221e576856bc75e2d6310000008403935068056bc75e2d631000006b02df0ab5a80a22c61ab5a70082028161221a57fe5b0590505b682b5e3af16b18800000841261225e57682b5e3af16b188000008403935068056bc75e2d63100000693f1fce3da636ea5cf85082028161225a57fe5b0590505b6815af1d78b58c400000841261229e576815af1d78b58c4000008403935068056bc75e2d63100000690127fa27722cc06cc5e282028161229a57fe5b0590505b680ad78ebc5ac620000084126122dd57680ad78ebc5ac62000008403935068056bc75e2d6310000068280e60114edb805d038202816122d957fe5b0590505b68056bc75e2d63100000841261231c5768056bc75e2d631000008403935068056bc75e2d63100000680ebc5fb4174612111082028161231857fe5b0590505b6802b5e3af16b1880000841261235b576802b5e3af16b18800008403935068056bc75e2d631000006808f00f760a4b2db55d82028161235757fe5b0590505b68015af1d78b58c40000841261239a5768015af1d78b58c400008403935068056bc75e2d631000006806f5f177578893793782028161239657fe5b0590505b600068056bc75e2d63100000905060008590508082019150600268056bc75e2d63100000878302816123c857fe5b05816123d057fe5b0590508082019150600368056bc75e2d63100000878302816123ee57fe5b05816123f657fe5b0590508082019150600468056bc75e2d631000008783028161241457fe5b058161241c57fe5b0590508082019150600568056bc75e2d631000008783028161243a57fe5b058161244257fe5b0590508082019150600668056bc75e2d631000008783028161246057fe5b058161246857fe5b0590508082019150600768056bc75e2d631000008783028161248657fe5b058161248e57fe5b0590508082019150600868056bc75e2d63100000878302816124ac57fe5b05816124b457fe5b0590508082019150600968056bc75e2d63100000878302816124d257fe5b05816124da57fe5b0590508082019150600a68056bc75e2d63100000878302816124f857fe5b058161250057fe5b0590508082019150600b68056bc75e2d631000008783028161251e57fe5b058161252657fe5b0590508082019150600c68056bc75e2d631000008783028161254457fe5b058161254c57fe5b059050808201915060648468056bc75e2d631000008486028161256b57fe5b05028161257457fe5b059450505050505b91905056fea264697066735822122099bbedde05c24113216fa88232530b3692c4d3d4839f482f7a935d1c0fa6382a64736f6c63430007010033";

type MockWeightedMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockWeightedMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockWeightedMath__factory extends ContractFactory {
  constructor(...args: MockWeightedMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockWeightedMath> {
    return super.deploy(overrides || {}) as Promise<MockWeightedMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockWeightedMath {
    return super.attach(address) as MockWeightedMath;
  }
  connect(signer: Signer): MockWeightedMath__factory {
    return super.connect(signer) as MockWeightedMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockWeightedMathInterface {
    return new utils.Interface(_abi) as MockWeightedMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockWeightedMath {
    return new Contract(address, _abi, signerOrProvider) as MockWeightedMath;
  }
}
