/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockVault, MockVaultInterface } from "../MockVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAuthorizer",
        name: "authorizer",
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
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "deltas",
        type: "int256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "protocolFees",
        type: "uint256[]",
      },
    ],
    name: "PoolBalanceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFeePercentage",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "callExitPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolFeePercentage",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "callJoinPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "lastChangeBlock",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
        ],
        internalType: "struct IPoolSwapStructs.SwapRequest",
        name: "request",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "balanceTokenIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceTokenOut",
        type: "uint256",
      },
    ],
    name: "callMinimalPoolSwap",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "getPoolTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IVault.PoolSpecialization",
        name: "",
        type: "uint8",
      },
    ],
    name: "registerPool",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    name: "registerTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ae638038062001ae6833981810160405281019062000037919062000095565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000123565b6000815190506200008f8162000109565b92915050565b600060208284031215620000a857600080fd5b6000620000b8848285016200007e565b91505092915050565b6000620000ce82620000e9565b9050919050565b6000620000e282620000c1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200011481620000d5565b81146200012057600080fd5b50565b6119b380620001336000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063aaabadc51161005b578063aaabadc5146100ea578063f76102db14610108578063f94d466814610124578063fc6156c5146101555761007d565b806309b2760f146100825780631cf8afb8146100b257806366a9c7d2146100ce575b600080fd5b61009c600480360381019061009791906110d4565b610171565b6040516100a991906114e7565b60405180910390f35b6100cc60048036038101906100c79190610e77565b610178565b005b6100e860048036038101906100e39190611055565b61042a565b005b6100f26104d9565b6040516100ff919061157f565b60405180910390f35b610122600480360381019061011d9190610f45565b610502565b005b61013e6004803603810190610139919061102c565b61060e565b60405161014c9291906114b0565b60405180910390f35b61016f600480360381019061016a9190610e77565b6107db565b005b6000919050565b6060808873ffffffffffffffffffffffffffffffffffffffff1663d5c096c489338a8a8a8a8a6040518863ffffffff1660e01b81526004016101c09796959493929190611502565b600060405180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906102179190610fc0565b915091506000600160008a8152602001908152602001600020905060005b81600001805490508110156102ec5783818151811061025057fe5b602002602001015182600101600084600001848154811061026d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508080600101915050610235565b506060875167ffffffffffffffff8111801561030757600080fd5b506040519080825280602002602001820160405280156103365781602001602082028036833780820191505090505b5090506060845167ffffffffffffffff8111801561035357600080fd5b506040519080825280602002602001820160405280156103825781602001602082028036833780820191505090505b50905060005b85518110156103c85785818151811061039d57fe5b60200260200101518282815181106103b157fe5b602002602001018181525050806001019050610388565b503373ffffffffffffffffffffffffffffffffffffffff168b7fe5ce249087ce04f05a957192435400fd97868dba0e6a4b4c049abf8af80dae7884848860405161041493929190611464565b60405180910390a3505050505050505050505050565b600060016000858152602001908152602001600020905060005b83518110156104d2578160000184828151811061045d57fe5b60200260200101519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080600101915050610444565b5050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008473ffffffffffffffffffffffffffffffffffffffff16639d2c110c8585856040518463ffffffff1660e01b81526004016105419392919061159a565b602060405180830381600087803b15801561055b57600080fd5b505af115801561056f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059391906110fd565b9050836040015173ffffffffffffffffffffffffffffffffffffffff16846020015173ffffffffffffffffffffffffffffffffffffffff1685608001517faf6c437771b0b661385e6b30c82a76e9067d1c318485cf0f0c47aeb35a9a1de3846040516105ff91906115d8565b60405180910390a45050505050565b6060806000600160008581526020019081526020016000209050806000018054905067ffffffffffffffff8111801561064657600080fd5b506040519080825280602002602001820160405280156106755781602001602082028036833780820191505090505b509250806000018054905067ffffffffffffffff8111801561069657600080fd5b506040519080825280602002602001820160405280156106c55781602001602082028036833780820191505090505b50915060005b81600001805490508110156107d4578160000181815481106106e957fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684828151811061072057fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081600101600085838151811061076c57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548382815181106107bb57fe5b60200260200101818152505080806001019150506106cb565b5050915091565b6060808873ffffffffffffffffffffffffffffffffffffffff166374f3b00989338a8a8a8a8a6040518863ffffffff1660e01b81526004016108239796959493929190611502565b600060405180830381600087803b15801561083d57600080fd5b505af1158015610851573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061087a9190610fc0565b915091506000600160008a8152602001908152602001600020905060005b816000018054905081101561094f578381815181106108b357fe5b60200260200101518260010160008460000184815481106108d057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508080600101915050610898565b506060875167ffffffffffffffff8111801561096a57600080fd5b506040519080825280602002602001820160405280156109995781602001602082028036833780820191505090505b5090506060845167ffffffffffffffff811180156109b657600080fd5b506040519080825280602002602001820160405280156109e55781602001602082028036833780820191505090505b50905060005b8551811015610a2e57858181518110610a0057fe5b6020026020010151600003828281518110610a1757fe5b6020026020010181815250508060010190506109eb565b503373ffffffffffffffffffffffffffffffffffffffff168b7fe5ce249087ce04f05a957192435400fd97868dba0e6a4b4c049abf8af80dae78848488604051610a7a93929190611464565b60405180910390a3505050505050505050505050565b600081359050610a9f81611901565b92915050565b600082601f830112610ab657600080fd5b8135610ac9610ac482611620565b6115f3565b91508181835260208401935060208101905083856020840282011115610aee57600080fd5b60005b83811015610b1e5781610b048882610a90565b845260208401935060208301925050600181019050610af1565b5050505092915050565b600082601f830112610b3957600080fd5b8135610b4c610b4782611648565b6115f3565b91508181835260208401935060208101905083856020840282011115610b7157600080fd5b60005b83811015610ba15781610b878882610d1a565b845260208401935060208301925050600181019050610b74565b5050505092915050565b600082601f830112610bbc57600080fd5b8135610bcf610bca82611670565b6115f3565b91508181835260208401935060208101905083856020840282011115610bf457600080fd5b60005b83811015610c245781610c0a8882610e4d565b845260208401935060208301925050600181019050610bf7565b5050505092915050565b600082601f830112610c3f57600080fd5b8151610c52610c4d82611670565b6115f3565b91508181835260208401935060208101905083856020840282011115610c7757600080fd5b60005b83811015610ca75781610c8d8882610e62565b845260208401935060208301925050600181019050610c7a565b5050505092915050565b600081359050610cc081611918565b92915050565b600082601f830112610cd757600080fd5b8135610cea610ce582611698565b6115f3565b91508082526020830160208301858383011115610d0657600080fd5b610d118382846118a1565b50505092915050565b600081359050610d298161192f565b92915050565b600081359050610d3e81611946565b92915050565b600081359050610d5381611956565b92915050565b60006101208284031215610d6c57600080fd5b610d776101206115f3565b90506000610d8784828501610d44565b6000830152506020610d9b84828501610d1a565b6020830152506040610daf84828501610d1a565b6040830152506060610dc384828501610e4d565b6060830152506080610dd784828501610cb1565b60808301525060a0610deb84828501610e4d565b60a08301525060c0610dff84828501610a90565b60c08301525060e0610e1384828501610a90565b60e08301525061010082013567ffffffffffffffff811115610e3457600080fd5b610e4084828501610cc6565b6101008301525092915050565b600081359050610e5c81611966565b92915050565b600081519050610e7181611966565b92915050565b600080600080600080600060e0888a031215610e9257600080fd5b6000610ea08a828b01610a90565b9750506020610eb18a828b01610cb1565b9650506040610ec28a828b01610a90565b955050606088013567ffffffffffffffff811115610edf57600080fd5b610eeb8a828b01610bab565b9450506080610efc8a828b01610e4d565b93505060a0610f0d8a828b01610e4d565b92505060c088013567ffffffffffffffff811115610f2a57600080fd5b610f368a828b01610cc6565b91505092959891949750929550565b60008060008060808587031215610f5b57600080fd5b6000610f6987828801610a90565b945050602085013567ffffffffffffffff811115610f8657600080fd5b610f9287828801610d59565b9350506040610fa387828801610e4d565b9250506060610fb487828801610e4d565b91505092959194509250565b60008060408385031215610fd357600080fd5b600083015167ffffffffffffffff811115610fed57600080fd5b610ff985828601610c2e565b925050602083015167ffffffffffffffff81111561101657600080fd5b61102285828601610c2e565b9150509250929050565b60006020828403121561103e57600080fd5b600061104c84828501610cb1565b91505092915050565b60008060006060848603121561106a57600080fd5b600061107886828701610cb1565b935050602084013567ffffffffffffffff81111561109557600080fd5b6110a186828701610b28565b925050604084013567ffffffffffffffff8111156110be57600080fd5b6110ca86828701610aa5565b9150509250925092565b6000602082840312156110e657600080fd5b60006110f484828501610d2f565b91505092915050565b60006020828403121561110f57600080fd5b600061111d84828501610e62565b91505092915050565b60006111328383611354565b60208301905092915050565b600061114a8383611372565b60208301905092915050565b60006111628383611446565b60208301905092915050565b61117781611811565b82525050565b6111868161179c565b82525050565b6111958161179c565b82525050565b60006111a6826116f4565b6111b08185611747565b93506111bb836116c4565b8060005b838110156111ec5781516111d38882611126565b97506111de83611720565b9250506001810190506111bf565b5085935050505092915050565b6000611204826116ff565b61120e8185611758565b9350611219836116d4565b8060005b8381101561124a578151611231888261113e565b975061123c8361172d565b92505060018101905061121d565b5085935050505092915050565b60006112628261170a565b61126c8185611769565b9350611277836116e4565b8060005b838110156112a857815161128f8882611156565b975061129a8361173a565b92505060018101905061127b565b5085935050505092915050565b6112be816117ae565b82525050565b6112cd816117ae565b82525050565b60006112de82611715565b6112e8818561177a565b93506112f88185602086016118b0565b611301816118e3565b840191505092915050565b600061131782611715565b611321818561178b565b93506113318185602086016118b0565b61133a816118e3565b840191505092915050565b61134e81611823565b82525050565b61135d81611847565b82525050565b61136c8161186b565b82525050565b61137b816117dd565b82525050565b60006101208301600083015161139a6000860182611363565b5060208301516113ad6020860182611354565b5060408301516113c06040860182611354565b5060608301516113d36060860182611446565b5060808301516113e660808601826112b5565b5060a08301516113f960a0860182611446565b5060c083015161140c60c086018261117d565b5060e083015161141f60e086018261117d565b5061010083015184820361010086015261143982826112d3565b9150508091505092915050565b61144f81611807565b82525050565b61145e81611807565b82525050565b6000606082019050818103600083015261147e818661119b565b9050818103602083015261149281856111f9565b905081810360408301526114a68184611257565b9050949350505050565b600060408201905081810360008301526114ca818561119b565b905081810360208301526114de8184611257565b90509392505050565b60006020820190506114fc60008301846112c4565b92915050565b600060e082019050611517600083018a6112c4565b611524602083018961116e565b611531604083018861118c565b81810360608301526115438187611257565b90506115526080830186611455565b61155f60a0830185611455565b81810360c0830152611571818461130c565b905098975050505050505050565b60006020820190506115946000830184611345565b92915050565b600060608201905081810360008301526115b48186611381565b90506115c36020830185611455565b6115d06040830184611455565b949350505050565b60006020820190506115ed6000830184611455565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561161657600080fd5b8060405250919050565b600067ffffffffffffffff82111561163757600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561165f57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561168757600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156116af57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006117a7826117e7565b9050919050565b6000819050919050565b60006117c38261179c565b9050919050565b60008190506117d8826118f4565b919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061181c8261187d565b9050919050565b600061182e82611835565b9050919050565b6000611840826117e7565b9050919050565b600061185282611859565b9050919050565b6000611864826117e7565b9050919050565b6000611876826117ca565b9050919050565b60006118888261188f565b9050919050565b600061189a826117e7565b9050919050565b82818337600083830152505050565b60005b838110156118ce5780820151818401526020810190506118b3565b838111156118dd576000848401525b50505050565b6000601f19601f8301169050919050565b600281106118fe57fe5b50565b61190a8161179c565b811461191557600080fd5b50565b611921816117ae565b811461192c57600080fd5b50565b611938816117b8565b811461194357600080fd5b50565b6003811061195357600080fd5b50565b6002811061196357600080fd5b50565b61196f81611807565b811461197a57600080fd5b5056fea2646970667358221220db8e45e39ca6ff81948fe5ec7597852a71385f844cd8a5bb1bce70e75fc6c81564736f6c63430007010033";

type MockVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVault__factory extends ContractFactory {
  constructor(...args: MockVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    authorizer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVault> {
    return super.deploy(authorizer, overrides || {}) as Promise<MockVault>;
  }
  getDeployTransaction(
    authorizer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(authorizer, overrides || {});
  }
  attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVaultInterface {
    return new utils.Interface(_abi) as MockVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
  }
}
