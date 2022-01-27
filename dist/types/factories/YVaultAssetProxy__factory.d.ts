import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YVaultAssetProxy, YVaultAssetProxyInterface } from "../YVaultAssetProxy";
declare type YVaultAssetProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class YVaultAssetProxy__factory extends ContractFactory {
    constructor(...args: YVaultAssetProxyConstructorParams);
    deploy(vault_: string, _token: string, _name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<YVaultAssetProxy>;
    getDeployTransaction(vault_: string, _token: string, _name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): YVaultAssetProxy;
    connect(signer: Signer): YVaultAssetProxy__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200444f3803806200444f8339818101604052810190620000379190620009ee565b828282818181600090805190602001906200005492919062000870565b5080600190805190602001906200006d92919062000870565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001626200054560201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405162000194919062000ca2565b60405180910390206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620001f195949392919062000d01565b6040516020818303038152906040528051906020012060068190555050508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050620002d88373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200029157600080fd5b505afa158015620002a6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002cc919062000afd565b6200054760201b60201c565b5050508373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1663095ea7b3857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016200036f92919062000cd4565b602060405180830381600087803b1580156200038a57600080fd5b505af11580156200039f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c5919062000a8c565b5060008473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200040f57600080fd5b505afa15801562000424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200044a919062000afd565b90508060ff1660c08160ff1660f81b815250508060ff168473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620004a857600080fd5b505afa158015620004bd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004e3919062000afd565b60ff161462000529576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005209062000d5e565b60405180910390fd5b6200053a856200056560201b60201c565b505050505062000ff7565b565b80600260006101000a81548160ff021916908360ff16021790555050565b60008173ffffffffffffffffffffffffffffffffffffffff1663258294106040518163ffffffff1660e01b815260040160006040518083038186803b158015620005ae57600080fd5b505afa158015620005c3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190620005ee919062000ab8565b905062000637816040518060400160405280600581526020017f302e332e300000000000000000000000000000000000000000000000000000008152506200080860201b60201c565b8062000686575062000685816040518060400160405280600581526020017f302e332e310000000000000000000000000000000000000000000000000000008152506200080860201b60201c565b5b80620006d55750620006d4816040518060400160405280600581526020017f302e332e320000000000000000000000000000000000000000000000000000008152506200080860201b60201c565b5b8062000724575062000723816040518060400160405280600581526020017f302e332e330000000000000000000000000000000000000000000000000000008152506200080860201b60201c565b5b8062000773575062000772816040518060400160405280600581526020017f302e332e340000000000000000000000000000000000000000000000000000008152506200080860201b60201c565b5b80620007c25750620007c1816040518060400160405280600581526020017f302e332e350000000000000000000000000000000000000000000000000000008152506200080860201b60201c565b5b62000804576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007fb9062000d80565b60405180910390fd5b5050565b600080836040516020016200081e919062000cbb565b6040516020818303038152906040528051906020012090506000836040516020016200084b919062000cbb565b6040516020818303038152906040528051906020012090508082149250505092915050565b8280546200087e9062000efb565b90600052602060002090601f016020900481019282620008a25760008555620008ee565b82601f10620008bd57805160ff1916838001178555620008ee565b82800160010185558215620008ee579182015b82811115620008ed578251825591602001919060010190620008d0565b5b509050620008fd919062000901565b5090565b5b808211156200091c57600081600090555060010162000902565b5090565b600062000937620009318462000dd6565b62000da2565b9050828152602081018484840111156200095057600080fd5b6200095d84828562000ec5565b509392505050565b600081519050620009768162000f8f565b92915050565b6000815190506200098d8162000fa9565b92915050565b600081519050620009a48162000fc3565b92915050565b600082601f830112620009bc57600080fd5b8151620009ce84826020860162000920565b91505092915050565b600081519050620009e88162000fdd565b92915050565b6000806000806080858703121562000a0557600080fd5b600062000a158782880162000965565b945050602062000a288782880162000993565b935050604085015167ffffffffffffffff81111562000a4657600080fd5b62000a5487828801620009aa565b925050606085015167ffffffffffffffff81111562000a7257600080fd5b62000a8087828801620009aa565b91505092959194509250565b60006020828403121562000a9f57600080fd5b600062000aaf848285016200097c565b91505092915050565b60006020828403121562000acb57600080fd5b600082015167ffffffffffffffff81111562000ae657600080fd5b62000af484828501620009aa565b91505092915050565b60006020828403121562000b1057600080fd5b600062000b2084828501620009d7565b91505092915050565b62000b348162000e50565b82525050565b62000b458162000e70565b82525050565b6000815462000b5a8162000efb565b62000b66818662000e29565b9450600182166000811462000b84576001811462000b965762000bcd565b60ff1983168652818601935062000bcd565b62000ba18562000e09565b60005b8381101562000bc55781548189015260018201915060208101905062000ba4565b838801955050505b50505092915050565b600062000be38262000e1e565b62000bef818562000e45565b935062000c0181856020860162000ec5565b80840191505092915050565b600062000c1c60158362000e34565b91507f496e636f6e73697374656e7420646563696d616c7300000000000000000000006000830152602082019050919050565b600062000c5e60138362000e34565b91507f556e737570706f727465642056657273696f6e000000000000000000000000006000830152602082019050919050565b62000c9c8162000eae565b82525050565b600062000cb0828462000b4b565b915081905092915050565b600062000cc9828462000bd6565b915081905092915050565b600060408201905062000ceb600083018562000b29565b62000cfa602083018462000c91565b9392505050565b600060a08201905062000d18600083018862000b3a565b62000d27602083018762000b3a565b62000d36604083018662000b3a565b62000d45606083018562000c91565b62000d54608083018462000b29565b9695505050505050565b6000602082019050818103600083015262000d798162000c0d565b9050919050565b6000602082019050818103600083015262000d9b8162000c4f565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171562000dcc5762000dcb62000f60565b5b8060405250919050565b600067ffffffffffffffff82111562000df45762000df362000f60565b5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600062000e5d8262000e8e565b9050919050565b60008115159050919050565b6000819050919050565b600062000e878262000e50565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101562000ee557808201518184015260208101905062000ec8565b8381111562000ef5576000848401525b50505050565b6000600282049050600182168062000f1457607f821691505b6020821081141562000f2b5762000f2a62000f31565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000f9a8162000e50565b811462000fa657600080fd5b50565b62000fb48162000e64565b811462000fc057600080fd5b50565b62000fce8162000e7a565b811462000fda57600080fd5b50565b62000fe88162000eb8565b811462000ff457600080fd5b50565b60805160601c60a05160601c60c05160f81c6133a1620010ae600039600081816111a401528181611b3801526120f801526000818161096001528181610a2f015281816116bd0152818161187e01528181611936015281816119d801528181611cc101528181611f3701526122270152600081816105e501528181610924015281816109f301528181610ef9015281816117bc015281816118a201528181611b9e0152818161216c015261232c01526133a16000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c80637e2fb9f4116100f9578063d505accf11610097578063e613deb211610071578063e613deb21461055b578063ec5e5e7d1461058b578063fbfa77cf146105a7578063fc0c546a146105c5576101c3565b8063d505accf146104f1578063d6b1aaaf1461050d578063dd62ed3e1461052b576101c3565b806395d89b41116100d357806395d89b41146104555780639d6179c314610473578063a9059cbb14610491578063b5c5f672146104c1576101c3565b80637e2fb9f4146103c35780637ecebe00146103f357806385f45c8814610423576101c3565b8063313ce5671161016657806347e7ef241161014057806347e7ef241461031457806358c7aa0f1461034457806367caf8711461036257806370a0823114610393576101c3565b8063313ce567146102a85780633644e515146102c65780633af9e669146102e4576101c3565b8063095ea7b3116101a2578063095ea7b31461022057806312424e3f1461025057806323b872dd1461025a57806330adf81f1461028a576101c3565b806291a446146101c857806303d41eb6146101e457806306fdde0314610202575b600080fd5b6101e260048036038101906101dd919061266c565b6105e3565b005b6101ec61079c565b6040516101f99190612cd4565b60405180910390f35b61020a6107a2565b6040516102179190612bb7565b60405180910390f35b61023a600480360381019061023591906125b8565b610830565b6040516102479190612aa5565b60405180910390f35b610258610922565b005b610274600480360381019061026f91906124cb565b610ae1565b6040516102819190612aa5565b60405180910390f35b610292610e64565b60405161029f9190612ac0565b60405180910390f35b6102b0610e8b565b6040516102bd9190612de6565b60405180910390f35b6102ce610e9e565b6040516102db9190612ac0565b60405180910390f35b6102fe60048036038101906102f99190612466565b610ea4565b60405161030b9190612cd4565b60405180910390f35b61032e600480360381019061032991906125b8565b610ef5565b60405161033b9190612cd4565b60405180910390f35b61034c610fc8565b6040516103599190612cb9565b60405180910390f35b61037c600480360381019061037791906125f4565b610fea565b60405161038a929190612d86565b60405180910390f35b6103ad60048036038101906103a89190612466565b611057565b6040516103ba9190612cd4565b60405180910390f35b6103dd60048036038101906103d89190612466565b61106f565b6040516103ea9190612cd4565b60405180910390f35b61040d60048036038101906104089190612466565b611087565b60405161041a9190612cd4565b60405180910390f35b61043d60048036038101906104389190612466565b61109f565b60405161044c93929190612daf565b60405180910390f35b61045d611114565b60405161046a9190612bb7565b60405180910390f35b61047b6111a2565b6040516104889190612de6565b60405180910390f35b6104ab60048036038101906104a691906125b8565b6111c6565b6040516104b89190612aa5565b60405180910390f35b6104db60048036038101906104d691906125f4565b6111db565b6040516104e89190612cd4565b60405180910390f35b61050b6004803603810190610506919061251a565b6111f3565b005b6105156115d9565b6040516105229190612cb9565b60405180910390f35b6105456004803603810190610540919061248f565b6115fb565b6040516105529190612cd4565b60405180910390f35b6105756004803603810190610570919061266c565b611620565b6040516105829190612cd4565b60405180910390f35b6105a560048036038101906105a0919061266c565b611632565b005b6105af61187c565b6040516105bc9190612b9c565b60405180910390f35b6105cd6118a0565b6040516105da9190612b81565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161064093929190612a1c565b602060405180830381600087803b15801561065a57600080fd5b505af115801561066e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106929190612643565b5060008061069e6118c4565b9150915060008290506106b2826001611931565b816106bd9190612e28565b9050600060095490506000808214156106d8578590506106f2565b8286836106e59190613020565b6106ef9190612e7e565b90505b6000851480156107025750600084145b1561071757600186610714919061307a565b95505b61072c86866107269190612e28565b85611abe565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461077b9190612e28565b92505081905550808261078e9190612e28565b600981905550505050505050565b60095481565b600080546107af906131c8565b80601f01602080910402602001604051908101604052809291908181526020018280546107db906131c8565b80156108285780601f106107fd57610100808354040283529160200191610828565b820191906000526020600020905b81548152906001019060200180831161080b57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109109190612cd4565b60405180910390a36001905092915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f000000000000000000000000000000000000000000000000000000000000000060006040518363ffffffff1660e01b815260040161099e929190612a53565b602060405180830381600087803b1580156109b857600080fd5b505af11580156109cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f09190612643565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401610a8c929190612a7c565b602060405180830381600087803b158015610aa657600080fd5b505af1158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade9190612643565b50565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610b69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6090612c99565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610d16576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d145783811015610c87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7e90612bd9565b60405180910390fd5b8381610c93919061307a565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b8281610d22919061307a565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610db09190612e28565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610e509190612cd4565b60405180910390a360019150509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b6000610eee600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b34565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610f5493929190612a1c565b602060405180830381600087803b158015610f6e57600080fd5b505af1158015610f82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa69190612643565b506000610fb1611b87565b509050610fbe8482611dd1565b8091505092915050565b600860109054906101000a90046fffffffffffffffffffffffffffffffff1681565b6000806000600260009054906101000a900460ff16600a61100b9190612f02565b9050600061101882611b34565b905060008183886110299190613020565b6110339190612e7e565b9050600061104389838986611ec9565b905080829550955050505050935093915050565b60036020528060005260406000206000915090505481565b60076020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b60008060008060006110af611b87565b915091506000600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506111018784611dd1565b8282829550955095505050509193909250565b60018054611121906131c8565b80601f016020809104026020016040519081016040528092919081815260200182805461114d906131c8565b801561119a5780601f1061116f5761010080835404028352916020019161119a565b820191906000526020600020905b81548152906001019060200180831161117d57829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006111d3338484610ae1565b905092915050565b60006111ea8484846000611ec9565b90509392505050565b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a60405160200161127596959493929190612adb565b6040516020818303038152906040528051906020012060405160200161129c9291906129ca565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b90612c19565b60405180910390fd5b600181858585604051600081526020016040526040516113479493929190612b3c565b6020604051602081039080840390855afa158015611369573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146113e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d790612c39565b60405180910390fd5b60008514806113ef5750844211155b61142e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142590612c79565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115611494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148b90612bf9565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906114e4906131fa565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925886040516115c79190612cd4565b60405180910390a35050505050505050565b600860009054906101000a90046fffffffffffffffffffffffffffffffff1681565b6004602052816000526040600020602052806000526040600020600091509150505481565b600061162b82611b34565b9050919050565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611681919061307a565b925050819055506000806116936118c4565b915091506000600954905060008185846116ad9190613020565b6116b79190612e7e565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e63697c8833060006040518463ffffffff1660e01b815260040161171993929190612d18565b602060405180830381600087803b15801561173357600080fd5b505af1158015611747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176b9190612695565b9050600083878761177c9190613020565b6117869190612e7e565b90506117a88187611797919061307a565b84876117a3919061307a565b611abe565b86846117b4919061307a565b6009819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3383856118039190612e28565b6040518363ffffffff1660e01b8152600401611820929190612a7c565b602060405180830381600087803b15801561183a57600080fd5b505af115801561184e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118729190612643565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600860009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16600860109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16915091509091565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561199a57600080fd5b505afa1580156119ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d29190612695565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b815260040160206040518083038186803b158015611a3c57600080fd5b505afa158015611a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a749190612695565b90508315611a9c57818582611a899190613020565b611a939190612e7e565b92505050611ab8565b808583611aa99190613020565b611ab39190612e7e565b925050505b92915050565b81600860006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555080600860106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505050565b60007f0000000000000000000000000000000000000000000000000000000000000000600a611b639190612f02565b611b6b611f33565b83611b769190613020565b611b809190612e7e565b9050919050565b600080600080611b956118c4565b915091506000827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611bf59190612a01565b60206040518083038186803b158015611c0d57600080fd5b505afa158015611c21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c459190612695565b611c4f919061307a565b9050600083141580611c62575060008214155b15611c7757600181611c74919061307a565b90505b6000611c84826000611931565b905080831115611cbd57611cae8285611c9d9190612e28565b8285611ca9919061307a565b611abe565b80829550955050505050611dcd565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e553f658487611d079190612e28565b306040518363ffffffff1660e01b8152600401611d25929190612cef565b602060405180830381600087803b158015611d3f57600080fd5b505af1158015611d53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d779190612695565b905060008386611d879190612e28565b8285611d939190613020565b611d9d9190612e7e565b9050611dc06000828488611db19190612e28565b611dbb919061307a565b611abe565b8084975097505050505050505b9091565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611e1c9190612e28565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611ebd9190612cd4565b60405180910390a35050565b6000611ed53385611fd8565b6000611ee28587856120d0565b905083811015611f27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1e90612c59565b60405180910390fd5b80915050949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b158015611f9b57600080fd5b505afa158015611faf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd39190612695565b905090565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612023919061307a565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516120c49190612cd4565b60405180910390a35050565b6000808214156120e5576120e2611f33565b91505b6000806120f06118c4565b9150915060007f0000000000000000000000000000000000000000000000000000000000000000600a6121239190612f02565b61212b611f33565b886121369190613020565b6121409190612e7e565b9050828110156122235761216a8184612159919061307a565b88846121659190612e28565b611abe565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87836040518363ffffffff1660e01b81526004016121c5929190612a7c565b602060405180830381600087803b1580156121df57600080fd5b505af11580156121f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122179190612643565b508093505050506123e1565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e63697c8848a61226d9190612e28565b306127106040518463ffffffff1660e01b815260040161228f93929190612d4f565b602060405180830381600087803b1580156122a957600080fd5b505af11580156122bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e19190612695565b9050600088846122f19190612e28565b828a6122fd9190613020565b6123079190612e7e565b905061232a8183876123199190612e28565b612323919061307a565b6000611abe565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb89836040518363ffffffff1660e01b8152600401612385929190612a7c565b602060405180830381600087803b15801561239f57600080fd5b505af11580156123b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d79190612643565b5080955050505050505b9392505050565b6000813590506123f7816132f8565b92915050565b60008151905061240c8161330f565b92915050565b60008135905061242181613326565b92915050565b6000813590506124368161333d565b92915050565b60008151905061244b8161333d565b92915050565b60008135905061246081613354565b92915050565b60006020828403121561247857600080fd5b6000612486848285016123e8565b91505092915050565b600080604083850312156124a257600080fd5b60006124b0858286016123e8565b92505060206124c1858286016123e8565b9150509250929050565b6000806000606084860312156124e057600080fd5b60006124ee868287016123e8565b93505060206124ff868287016123e8565b925050604061251086828701612427565b9150509250925092565b600080600080600080600060e0888a03121561253557600080fd5b60006125438a828b016123e8565b97505060206125548a828b016123e8565b96505060406125658a828b01612427565b95505060606125768a828b01612427565b94505060806125878a828b01612451565b93505060a06125988a828b01612412565b92505060c06125a98a828b01612412565b91505092959891949750929550565b600080604083850312156125cb57600080fd5b60006125d9858286016123e8565b92505060206125ea85828601612427565b9150509250929050565b60008060006060848603121561260957600080fd5b6000612617868287016123e8565b935050602061262886828701612427565b925050604061263986828701612427565b9150509250925092565b60006020828403121561265557600080fd5b6000612663848285016123fd565b91505092915050565b60006020828403121561267e57600080fd5b600061268c84828501612427565b91505092915050565b6000602082840312156126a757600080fd5b60006126b58482850161243c565b91505092915050565b6126c7816130ae565b82525050565b6126d6816130c0565b82525050565b6126e5816130cc565b82525050565b6126fc6126f7826130cc565b613243565b82525050565b61270b81613129565b82525050565b61271a8161314d565b82525050565b61272981613171565b82525050565b61273881613183565b82525050565b600061274982612e01565b6127538185612e0c565b9350612763818560208601613195565b61276c816132da565b840191505092915050565b6000612784601d83612e0c565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b60006127c4600283612e1d565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6000612804602283612e0c565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061286a601883612e0c565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b60006128aa601583612e0c565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b60006128ea601583612e0c565b91507f4e6f7420656e6f75676820756e6465726c79696e6700000000000000000000006000830152602082019050919050565b600061292a601583612e0c565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b600061296a601b83612e0c565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b6129a6816130d6565b82525050565b6129b581613112565b82525050565b6129c48161311c565b82525050565b60006129d5826127b7565b91506129e182856126eb565b6020820191506129f182846126eb565b6020820191508190509392505050565b6000602082019050612a1660008301846126be565b92915050565b6000606082019050612a3160008301866126be565b612a3e60208301856126be565b612a4b60408301846129ac565b949350505050565b6000604082019050612a6860008301856126be565b612a756020830184612720565b9392505050565b6000604082019050612a9160008301856126be565b612a9e60208301846129ac565b9392505050565b6000602082019050612aba60008301846126cd565b92915050565b6000602082019050612ad560008301846126dc565b92915050565b600060c082019050612af060008301896126dc565b612afd60208301886126be565b612b0a60408301876126be565b612b1760608301866129ac565b612b2460808301856129ac565b612b3160a08301846129ac565b979650505050505050565b6000608082019050612b5160008301876126dc565b612b5e60208301866129bb565b612b6b60408301856126dc565b612b7860608301846126dc565b95945050505050565b6000602082019050612b966000830184612702565b92915050565b6000602082019050612bb16000830184612711565b92915050565b60006020820190508181036000830152612bd1818461273e565b905092915050565b60006020820190508181036000830152612bf281612777565b9050919050565b60006020820190508181036000830152612c12816127f7565b9050919050565b60006020820190508181036000830152612c328161285d565b9050919050565b60006020820190508181036000830152612c528161289d565b9050919050565b60006020820190508181036000830152612c72816128dd565b9050919050565b60006020820190508181036000830152612c928161291d565b9050919050565b60006020820190508181036000830152612cb28161295d565b9050919050565b6000602082019050612cce600083018461299d565b92915050565b6000602082019050612ce960008301846129ac565b92915050565b6000604082019050612d0460008301856129ac565b612d1160208301846126be565b9392505050565b6000606082019050612d2d60008301866129ac565b612d3a60208301856126be565b612d476040830184612720565b949350505050565b6000606082019050612d6460008301866129ac565b612d7160208301856126be565b612d7e604083018461272f565b949350505050565b6000604082019050612d9b60008301856129ac565b612da860208301846129ac565b9392505050565b6000606082019050612dc460008301866129ac565b612dd160208301856129ac565b612dde60408301846129ac565b949350505050565b6000602082019050612dfb60008301846129bb565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000612e3382613112565b9150612e3e83613112565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e7357612e7261324d565b5b828201905092915050565b6000612e8982613112565b9150612e9483613112565b925082612ea457612ea361327c565b5b828204905092915050565b6000808291508390505b6001851115612ef957808604811115612ed557612ed461324d565b5b6001851615612ee45780820291505b8081029050612ef2856132eb565b9450612eb9565b94509492505050565b6000612f0d82613112565b9150612f188361311c565b9250612f457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612f4d565b905092915050565b600082612f5d5760019050613019565b81612f6b5760009050613019565b8160018114612f815760028114612f8b57612fba565b6001915050613019565b60ff841115612f9d57612f9c61324d565b5b8360020a915084821115612fb457612fb361324d565b5b50613019565b5060208310610133831016604e8410600b8410161715612fef5782820a905083811115612fea57612fe961324d565b5b613019565b612ffc8484846001612eaf565b925090508184048111156130135761301261324d565b5b81810290505b9392505050565b600061302b82613112565b915061303683613112565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561306f5761306e61324d565b5b828202905092915050565b600061308582613112565b915061309083613112565b9250828210156130a3576130a261324d565b5b828203905092915050565b60006130b9826130f2565b9050919050565b60008115159050919050565b6000819050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006131348261313b565b9050919050565b6000613146826130f2565b9050919050565b60006131588261315f565b9050919050565b600061316a826130f2565b9050919050565b600061317c82613112565b9050919050565b600061318e82613112565b9050919050565b60005b838110156131b3578082015181840152602081019050613198565b838111156131c2576000848401525b50505050565b600060028204905060018216806131e057607f821691505b602082108114156131f4576131f36132ab565b5b50919050565b600061320582613112565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156132385761323761324d565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b613301816130ae565b811461330c57600080fd5b50565b613318816130c0565b811461332357600080fd5b50565b61332f816130cc565b811461333a57600080fd5b50565b61334681613112565b811461335157600080fd5b50565b61335d8161311c565b811461336857600080fd5b5056fea26469706673582212206210aeb7dc670f6006019c4187a2c4f35d37c1778dc352c3475b78ff6db3d5a964736f6c63430008000033";
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
    static createInterface(): YVaultAssetProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): YVaultAssetProxy;
}
export {};
