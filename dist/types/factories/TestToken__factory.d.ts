import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestToken, TestTokenInterface } from "../TestToken";
declare type TestTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestToken__factory extends ContractFactory {
    constructor(...args: TestTokenConstructorParams);
    deploy(admin: string, name: string, symbol: string, decimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestToken>;
    getDeployTransaction(admin: string, name: string, symbol: string, decimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestToken;
    connect(signer: Signer): TestToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620020c1380380620020c1833981810160405260808110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011f57600080fd5b838201915060208201858111156200013657600080fd5b82518660018202830111640100000000821117156200015457600080fd5b8083526020830192505050908051906020019080838360005b838110156200018a5780820151818401526020810190506200016d565b50505050905090810190601f168015620001b85780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082828160049080519060200190620001e692919062000477565b508060059080519060200190620001ff92919062000477565b506012600660006101000a81548160ff021916908360ff16021790555050506200022f816200028060201b60201c565b620002446000801b856200029e60201b60201c565b620002767f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6856200029e60201b60201c565b505050506200051d565b80600660006101000a81548160ff021916908360ff16021790555050565b620002b08282620002b460201b60201c565b5050565b620002e2816000808581526020019081526020016000206000016200034860201b62000f9a1790919060201c565b1562000344573373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006200035c83836200042860201b60201c565b6200041d5782600001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600001805490508360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905062000422565b600090505b92915050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004ba57805160ff1916838001178555620004eb565b82800160010185558215620004eb579182015b82811115620004ea578251825591602001919060010190620004cd565b5b509050620004fa9190620004fe565b5090565b5b8082111562000519576000816000905550600101620004ff565b5090565b611b94806200052d6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a457c2d71161007c578063a457c2d7146106c7578063a9059cbb1461072b578063ca15c8731461078f578063d5391393146107d1578063d547741f146107ef578063dd62ed3e1461083d5761014d565b806370a08231146104ba57806379cc6790146105125780639010d07c1461056057806391d14854146105c257806395d89b4114610626578063a217fddf146106a95761014d565b80632f2ff15d116101155780632f2ff15d1461031d578063313ce5671461036b57806336568abe1461038c57806339509351146103da57806340c10f191461043e57806342966c681461048c5761014d565b806306fdde0314610152578063095ea7b3146101d557806318160ddd1461023957806323b872dd14610257578063248a9ca3146102db575b600080fd5b61015a6108b5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019a57808201518184015260208101905061017f565b50505050905090810190601f1680156101c75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610221600480360360408110156101eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610957565b60405180821515815260200191505060405180910390f35b61024161096e565b6040518082815260200191505060405180910390f35b6102c36004803603606081101561026d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610978565b60405180821515815260200191505060405180910390f35b610307600480360360208110156102f157600080fd5b8101908080359060200190929190505050610a2d565b6040518082815260200191505060405180910390f35b6103696004803603604081101561033357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a4c565b005b610373610a84565b604051808260ff16815260200191505060405180910390f35b6103d8600480360360408110156103a257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a9b565b005b610426600480360360408110156103f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ae3565b60405180821515815260200191505060405180910390f35b61048a6004803603604081101561045457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b88565b005b6104b8600480360360208110156104a257600080fd5b8101908080359060200190929190505050610c32565b005b6104fc600480360360208110156104d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c3f565b6040518082815260200191505060405180910390f35b61055e6004803603604081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c88565b005b6105966004803603604081101561057657600080fd5b810190808035906020019092919080359060200190929190505050610cc6565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61060e600480360360408110156105d857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf7565b60405180821515815260200191505060405180910390f35b61062e610d28565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561066e578082015181840152602081019050610653565b50505050905090810190601f16801561069b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106b1610dca565b6040518082815260200191505060405180910390f35b610713600480360360408110156106dd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dd1565b60405180821515815260200191505060405180910390f35b6107776004803603604081101561074157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e7a565b60405180821515815260200191505060405180910390f35b6107bb600480360360208110156107a557600080fd5b8101908080359060200190929190505050610e91565b6040518082815260200191505060405180910390f35b6107d9610eb7565b6040518082815260200191505060405180910390f35b61083b6004803603604081101561080557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610edb565b005b61089f6004803603604081101561085357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f13565b6040518082815260200191505060405180910390f35b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561094d5780601f106109225761010080835404028352916020019161094d565b820191906000526020600020905b81548152906001019060200180831161093057829003601f168201915b5050505050905090565b6000610964338484611070565b6001905092915050565b6000600354905090565b60006109858484846111d3565b610a228433610a1d8561019e600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113ee9092919063ffffffff16565b611070565b600190509392505050565b6000806000838152602001908152602001600020600201549050919050565b610a76610a6e6000808581526020019081526020016000206002015433610cf7565b6101a661140f565b610a808282611422565b5050565b6000600660009054906101000a900460ff16905090565b610ad53373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146101a861140f565b610adf82826114ae565b5050565b6000610b7e3384610b7985600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153a90919063ffffffff16565b611070565b6001905092915050565b610bb27f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610cf7565b610c24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4e4f545f4d494e5445520000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610c2e828261155a565b5050565b610c3c33826116bc565b50565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610caa826101a1610c9b8633610f13565b6113ee9092919063ffffffff16565b9050610cb7833383611070565b610cc183836116bc565b505050565b6000610cef8260008086815260200190815260200160002060000161182290919063ffffffff16565b905092915050565b6000610d208260008086815260200190815260200160002060000161184a90919063ffffffff16565b905092915050565b606060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dc05780601f10610d9557610100808354040283529160200191610dc0565b820191906000526020600020905b815481529060010190602001808311610da357829003601f168201915b5050505050905090565b6000801b81565b6000610e703384610e6b8561019f600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113ee9092919063ffffffff16565b611070565b6001905092915050565b6000610e873384846111d3565b6001905092915050565b6000610eb0600080848152602001908152602001600020600001611899565b9050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610f05610efd6000808581526020019081526020016000206002015433610cf7565b6101a761140f565b610f0f82826114ae565b5050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000610fa6838361184a565b6110655782600001829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600001805490508360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905061106a565b600090505b92915050565b6110ac600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561019c61140f565b6110e8600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561019d61140f565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b61120f600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561019861140f565b61124b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561019961140f565b6112568383836118aa565b6112ac816101a0600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113ee9092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061134181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153a90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60006113fd848411158361140f565b60008385039050809150509392505050565b8161141e5761141d816118af565b5b5050565b61144981600080858152602001908152602001600020600001610f9a90919063ffffffff16565b156114aa573373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6114d58160008085815260200190815260200160002060000161191f90919063ffffffff16565b15611536573373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080828401905061155084821015600061140f565b8091505092915050565b611596600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561019a61140f565b6115a2600083836118aa565b6115b78160035461153a90919063ffffffff16565b60038190555061160f81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461153a90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6116f8600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561019b61140f565b611704826000836118aa565b61175a816101a1600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113ee9092919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117b281600354611b0490919063ffffffff16565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600061183882846000018054905011606461140f565b6118428383611b1a565b905092915050565b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415905092915050565b600081600001805490509050919050565b505050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b6000808360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114611af8576000600182039050600060018660000180549050039050600086600001828154811061199657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808760000184815481106119d357fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600183018760010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555086600001805480611a7157fe5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556001945050505050611afe565b60009150505b92915050565b6000611b12838360016113ee565b905092915050565b6000826000018281548110611b2b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509291505056fea26469706673582212202a518ea8216b2757c029a2588a499f8149d9fa017553fa9495eea855e497c55064736f6c63430007010033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestToken;
}
export {};
