import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YVaultV4AssetProxy, YVaultV4AssetProxyInterface } from "../YVaultV4AssetProxy";
declare type YVaultV4AssetProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class YVaultV4AssetProxy__factory extends ContractFactory {
    constructor(...args: YVaultV4AssetProxyConstructorParams);
    deploy(vault_: string, _token: string, _name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<YVaultV4AssetProxy>;
    getDeployTransaction(vault_: string, _token: string, _name: string, _symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): YVaultV4AssetProxy;
    connect(signer: Signer): YVaultV4AssetProxy__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b50604051620042e2380380620042e28339818101604052810190620000379190620008ba565b8383838382828281818160009080519060200190620000589291906200073c565b508060019080519060200190620000719291906200073c565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001666200054d60201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405162000198919062000b6e565b60405180910390206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620001f595949392919062000bcd565b6040516020818303038152906040528051906020012060068190555050508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050620002dc8373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200029557600080fd5b505afa158015620002aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002d09190620009c9565b6200054f60201b60201c565b5050508373ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1663095ea7b3857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016200037392919062000ba0565b602060405180830381600087803b1580156200038e57600080fd5b505af1158015620003a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c9919062000958565b5060008473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200041357600080fd5b505afa15801562000428573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200044e9190620009c9565b90508060ff1660c08160ff1660f81b815250508060ff168473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620004ac57600080fd5b505afa158015620004c1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004e79190620009c9565b60ff16146200052d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005249062000c2a565b60405180910390fd5b6200053e856200056d60201b60201c565b50505050505050505062000ec3565b565b80600260006101000a81548160ff021916908360ff16021790555050565b60008173ffffffffffffffffffffffffffffffffffffffff1663258294106040518163ffffffff1660e01b815260040160006040518083038186803b158015620005b657600080fd5b505afa158015620005cb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190620005f6919062000984565b90506200063f816040518060400160405280600581526020017f302e342e32000000000000000000000000000000000000000000000000000000815250620006d460201b60201c565b806200068e57506200068d816040518060400160405280600581526020017f302e342e33000000000000000000000000000000000000000000000000000000815250620006d460201b60201c565b5b620006d0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006c79062000c4c565b60405180910390fd5b5050565b60008083604051602001620006ea919062000b87565b60405160208183030381529060405280519060200120905060008360405160200162000717919062000b87565b6040516020818303038152906040528051906020012090508082149250505092915050565b8280546200074a9062000dc7565b90600052602060002090601f0160209004810192826200076e5760008555620007ba565b82601f106200078957805160ff1916838001178555620007ba565b82800160010185558215620007ba579182015b82811115620007b95782518255916020019190600101906200079c565b5b509050620007c99190620007cd565b5090565b5b80821115620007e8576000816000905550600101620007ce565b5090565b600062000803620007fd8462000ca2565b62000c6e565b9050828152602081018484840111156200081c57600080fd5b6200082984828562000d91565b509392505050565b600081519050620008428162000e5b565b92915050565b600081519050620008598162000e75565b92915050565b600081519050620008708162000e8f565b92915050565b600082601f8301126200088857600080fd5b81516200089a848260208601620007ec565b91505092915050565b600081519050620008b48162000ea9565b92915050565b60008060008060808587031215620008d157600080fd5b6000620008e18782880162000831565b9450506020620008f4878288016200085f565b935050604085015167ffffffffffffffff8111156200091257600080fd5b620009208782880162000876565b925050606085015167ffffffffffffffff8111156200093e57600080fd5b6200094c8782880162000876565b91505092959194509250565b6000602082840312156200096b57600080fd5b60006200097b8482850162000848565b91505092915050565b6000602082840312156200099757600080fd5b600082015167ffffffffffffffff811115620009b257600080fd5b620009c08482850162000876565b91505092915050565b600060208284031215620009dc57600080fd5b6000620009ec84828501620008a3565b91505092915050565b62000a008162000d1c565b82525050565b62000a118162000d3c565b82525050565b6000815462000a268162000dc7565b62000a32818662000cf5565b9450600182166000811462000a50576001811462000a625762000a99565b60ff1983168652818601935062000a99565b62000a6d8562000cd5565b60005b8381101562000a915781548189015260018201915060208101905062000a70565b838801955050505b50505092915050565b600062000aaf8262000cea565b62000abb818562000d11565b935062000acd81856020860162000d91565b80840191505092915050565b600062000ae860158362000d00565b91507f496e636f6e73697374656e7420646563696d616c7300000000000000000000006000830152602082019050919050565b600062000b2a60138362000d00565b91507f556e737570706f727465642056657273696f6e000000000000000000000000006000830152602082019050919050565b62000b688162000d7a565b82525050565b600062000b7c828462000a17565b915081905092915050565b600062000b95828462000aa2565b915081905092915050565b600060408201905062000bb76000830185620009f5565b62000bc6602083018462000b5d565b9392505050565b600060a08201905062000be4600083018862000a06565b62000bf3602083018762000a06565b62000c02604083018662000a06565b62000c11606083018562000b5d565b62000c206080830184620009f5565b9695505050505050565b6000602082019050818103600083015262000c458162000ad9565b9050919050565b6000602082019050818103600083015262000c678162000b1b565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171562000c985762000c9762000e2c565b5b8060405250919050565b600067ffffffffffffffff82111562000cc05762000cbf62000e2c565b5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600062000d298262000d5a565b9050919050565b60008115159050919050565b6000819050919050565b600062000d538262000d1c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101562000db157808201518184015260208101905062000d94565b8381111562000dc1576000848401525b50505050565b6000600282049050600182168062000de057607f821691505b6020821081141562000df75762000df662000dfd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000e668162000d1c565b811462000e7257600080fd5b50565b62000e808162000d30565b811462000e8c57600080fd5b50565b62000e9a8162000d46565b811462000ea657600080fd5b50565b62000eb48162000d84565b811462000ec057600080fd5b50565b60805160601c60a05160601c60c05160f81c61336162000f81600039600081816111a4015281816119dc01528181611a3401528181611af801526120b801526000818161096001528181610a2f015281816116bd0152818161187e0152818161193601528181611c8101528181611ef701526121e70152600081816105e501528181610924015281816109f301528181610ef9015281816117bc015281816118a201528181611b5e0152818161212c01526122ec01526133616000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c80637e2fb9f4116100f9578063d505accf11610097578063e613deb211610071578063e613deb21461055b578063ec5e5e7d1461058b578063fbfa77cf146105a7578063fc0c546a146105c5576101c3565b8063d505accf146104f1578063d6b1aaaf1461050d578063dd62ed3e1461052b576101c3565b806395d89b41116100d357806395d89b41146104555780639d6179c314610473578063a9059cbb14610491578063b5c5f672146104c1576101c3565b80637e2fb9f4146103c35780637ecebe00146103f357806385f45c8814610423576101c3565b8063313ce5671161016657806347e7ef241161014057806347e7ef241461031457806358c7aa0f1461034457806367caf8711461036257806370a0823114610393576101c3565b8063313ce567146102a85780633644e515146102c65780633af9e669146102e4576101c3565b8063095ea7b3116101a2578063095ea7b31461022057806312424e3f1461025057806323b872dd1461025a57806330adf81f1461028a576101c3565b806291a446146101c857806303d41eb6146101e457806306fdde0314610202575b600080fd5b6101e260048036038101906101dd919061262c565b6105e3565b005b6101ec61079c565b6040516101f99190612c94565b60405180910390f35b61020a6107a2565b6040516102179190612b77565b60405180910390f35b61023a60048036038101906102359190612578565b610830565b6040516102479190612a65565b60405180910390f35b610258610922565b005b610274600480360381019061026f919061248b565b610ae1565b6040516102819190612a65565b60405180910390f35b610292610e64565b60405161029f9190612a80565b60405180910390f35b6102b0610e8b565b6040516102bd9190612da6565b60405180910390f35b6102ce610e9e565b6040516102db9190612a80565b60405180910390f35b6102fe60048036038101906102f99190612426565b610ea4565b60405161030b9190612c94565b60405180910390f35b61032e60048036038101906103299190612578565b610ef5565b60405161033b9190612c94565b60405180910390f35b61034c610fc8565b6040516103599190612c79565b60405180910390f35b61037c600480360381019061037791906125b4565b610fea565b60405161038a929190612d46565b60405180910390f35b6103ad60048036038101906103a89190612426565b611057565b6040516103ba9190612c94565b60405180910390f35b6103dd60048036038101906103d89190612426565b61106f565b6040516103ea9190612c94565b60405180910390f35b61040d60048036038101906104089190612426565b611087565b60405161041a9190612c94565b60405180910390f35b61043d60048036038101906104389190612426565b61109f565b60405161044c93929190612d6f565b60405180910390f35b61045d611114565b60405161046a9190612b77565b60405180910390f35b61047b6111a2565b6040516104889190612da6565b60405180910390f35b6104ab60048036038101906104a69190612578565b6111c6565b6040516104b89190612a65565b60405180910390f35b6104db60048036038101906104d691906125b4565b6111db565b6040516104e89190612c94565b60405180910390f35b61050b600480360381019061050691906124da565b6111f3565b005b6105156115d9565b6040516105229190612c79565b60405180910390f35b6105456004803603810190610540919061244f565b6115fb565b6040516105529190612c94565b60405180910390f35b6105756004803603810190610570919061262c565b611620565b6040516105829190612c94565b60405180910390f35b6105a560048036038101906105a0919061262c565b611632565b005b6105af61187c565b6040516105bc9190612b5c565b60405180910390f35b6105cd6118a0565b6040516105da9190612b41565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610640939291906129dc565b602060405180830381600087803b15801561065a57600080fd5b505af115801561066e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106929190612603565b5060008061069e6118c4565b9150915060008290506106b2826001611931565b816106bd9190612de8565b9050600060095490506000808214156106d8578590506106f2565b8286836106e59190612fe0565b6106ef9190612e3e565b90505b6000851480156107025750600084145b1561071757600186610714919061303a565b95505b61072c86866107269190612de8565b85611a7e565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461077b9190612de8565b92505081905550808261078e9190612de8565b600981905550505050505050565b60095481565b600080546107af90613188565b80601f01602080910402602001604051908101604052809291908181526020018280546107db90613188565b80156108285780601f106107fd57610100808354040283529160200191610828565b820191906000526020600020905b81548152906001019060200180831161080b57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109109190612c94565b60405180910390a36001905092915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f000000000000000000000000000000000000000000000000000000000000000060006040518363ffffffff1660e01b815260040161099e929190612a13565b602060405180830381600087803b1580156109b857600080fd5b505af11580156109cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f09190612603565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401610a8c929190612a3c565b602060405180830381600087803b158015610aa657600080fd5b505af1158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade9190612603565b50565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610b69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6090612c59565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610d16576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d145783811015610c87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7e90612b99565b60405180910390fd5b8381610c93919061303a565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b8281610d22919061303a565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610db09190612de8565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610e509190612c94565b60405180910390a360019150509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b6000610eee600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611af4565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610f54939291906129dc565b602060405180830381600087803b158015610f6e57600080fd5b505af1158015610f82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa69190612603565b506000610fb1611b47565b509050610fbe8482611d91565b8091505092915050565b600860109054906101000a90046fffffffffffffffffffffffffffffffff1681565b6000806000600260009054906101000a900460ff16600a61100b9190612ec2565b9050600061101882611af4565b905060008183886110299190612fe0565b6110339190612e3e565b9050600061104389838986611e89565b905080829550955050505050935093915050565b60036020528060005260406000206000915090505481565b60076020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b60008060008060006110af611b47565b915091506000600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506111018784611d91565b8282829550955095505050509193909250565b6001805461112190613188565b80601f016020809104026020016040519081016040528092919081815260200182805461114d90613188565b801561119a5780601f1061116f5761010080835404028352916020019161119a565b820191906000526020600020905b81548152906001019060200180831161117d57829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006111d3338484610ae1565b905092915050565b60006111ea8484846000611e89565b90509392505050565b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a60405160200161127596959493929190612a9b565b6040516020818303038152906040528051906020012060405160200161129c92919061298a565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b90612bd9565b60405180910390fd5b600181858585604051600081526020016040526040516113479493929190612afc565b6020604051602081039080840390855afa158015611369573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146113e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d790612bf9565b60405180910390fd5b60008514806113ef5750844211155b61142e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142590612c39565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115611494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148b90612bb9565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906114e4906131ba565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925886040516115c79190612c94565b60405180910390a35050505050505050565b600860009054906101000a90046fffffffffffffffffffffffffffffffff1681565b6004602052816000526040600020602052806000526040600020600091509150505481565b600061162b82611af4565b9050919050565b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611681919061303a565b925050819055506000806116936118c4565b915091506000600954905060008185846116ad9190612fe0565b6116b79190612e3e565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e63697c8833060006040518463ffffffff1660e01b815260040161171993929190612cd8565b602060405180830381600087803b15801561173357600080fd5b505af1158015611747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176b9190612655565b9050600083878761177c9190612fe0565b6117869190612e3e565b90506117a88187611797919061303a565b84876117a3919061303a565b611a7e565b86846117b4919061303a565b6009819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3383856118039190612de8565b6040518363ffffffff1660e01b8152600401611820929190612a3c565b602060405180830381600087803b15801561183a57600080fd5b505af115801561184e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118729190612603565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600860009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16600860109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16915091509091565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b15801561199a57600080fd5b505afa1580156119ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d29190612655565b90508215611a25577f0000000000000000000000000000000000000000000000000000000000000000600a611a079190612ec2565b8482611a139190612fe0565b611a1d9190612e3e565b915050611a78565b600181611a329190612de8565b7f0000000000000000000000000000000000000000000000000000000000000000600a611a5f9190612ec2565b85611a6a9190612fe0565b611a749190612e3e565b9150505b92915050565b81600860006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555080600860106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505050565b60007f0000000000000000000000000000000000000000000000000000000000000000600a611b239190612ec2565b611b2b611ef3565b83611b369190612fe0565b611b409190612e3e565b9050919050565b600080600080611b556118c4565b915091506000827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611bb591906129c1565b60206040518083038186803b158015611bcd57600080fd5b505afa158015611be1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c059190612655565b611c0f919061303a565b9050600083141580611c22575060008214155b15611c3757600181611c34919061303a565b90505b6000611c44826000611931565b905080831115611c7d57611c6e8285611c5d9190612de8565b8285611c69919061303a565b611a7e565b80829550955050505050611d8d565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e553f658487611cc79190612de8565b306040518363ffffffff1660e01b8152600401611ce5929190612caf565b602060405180830381600087803b158015611cff57600080fd5b505af1158015611d13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d379190612655565b905060008386611d479190612de8565b8285611d539190612fe0565b611d5d9190612e3e565b9050611d806000828488611d719190612de8565b611d7b919061303a565b611a7e565b8084975097505050505050505b9091565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ddc9190612de8565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611e7d9190612c94565b60405180910390a35050565b6000611e953385611f98565b6000611ea2858785612090565b905083811015611ee7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ede90612c19565b60405180910390fd5b80915050949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b158015611f5b57600080fd5b505afa158015611f6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f939190612655565b905090565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fe3919061303a565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516120849190612c94565b60405180910390a35050565b6000808214156120a5576120a2611ef3565b91505b6000806120b06118c4565b9150915060007f0000000000000000000000000000000000000000000000000000000000000000600a6120e39190612ec2565b6120eb611ef3565b886120f69190612fe0565b6121009190612e3e565b9050828110156121e35761212a8184612119919061303a565b88846121259190612de8565b611a7e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87836040518363ffffffff1660e01b8152600401612185929190612a3c565b602060405180830381600087803b15801561219f57600080fd5b505af11580156121b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d79190612603565b508093505050506123a1565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e63697c8848a61222d9190612de8565b306127106040518463ffffffff1660e01b815260040161224f93929190612d0f565b602060405180830381600087803b15801561226957600080fd5b505af115801561227d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122a19190612655565b9050600088846122b19190612de8565b828a6122bd9190612fe0565b6122c79190612e3e565b90506122ea8183876122d99190612de8565b6122e3919061303a565b6000611a7e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb89836040518363ffffffff1660e01b8152600401612345929190612a3c565b602060405180830381600087803b15801561235f57600080fd5b505af1158015612373573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123979190612603565b5080955050505050505b9392505050565b6000813590506123b7816132b8565b92915050565b6000815190506123cc816132cf565b92915050565b6000813590506123e1816132e6565b92915050565b6000813590506123f6816132fd565b92915050565b60008151905061240b816132fd565b92915050565b60008135905061242081613314565b92915050565b60006020828403121561243857600080fd5b6000612446848285016123a8565b91505092915050565b6000806040838503121561246257600080fd5b6000612470858286016123a8565b9250506020612481858286016123a8565b9150509250929050565b6000806000606084860312156124a057600080fd5b60006124ae868287016123a8565b93505060206124bf868287016123a8565b92505060406124d0868287016123e7565b9150509250925092565b600080600080600080600060e0888a0312156124f557600080fd5b60006125038a828b016123a8565b97505060206125148a828b016123a8565b96505060406125258a828b016123e7565b95505060606125368a828b016123e7565b94505060806125478a828b01612411565b93505060a06125588a828b016123d2565b92505060c06125698a828b016123d2565b91505092959891949750929550565b6000806040838503121561258b57600080fd5b6000612599858286016123a8565b92505060206125aa858286016123e7565b9150509250929050565b6000806000606084860312156125c957600080fd5b60006125d7868287016123a8565b93505060206125e8868287016123e7565b92505060406125f9868287016123e7565b9150509250925092565b60006020828403121561261557600080fd5b6000612623848285016123bd565b91505092915050565b60006020828403121561263e57600080fd5b600061264c848285016123e7565b91505092915050565b60006020828403121561266757600080fd5b6000612675848285016123fc565b91505092915050565b6126878161306e565b82525050565b61269681613080565b82525050565b6126a58161308c565b82525050565b6126bc6126b78261308c565b613203565b82525050565b6126cb816130e9565b82525050565b6126da8161310d565b82525050565b6126e981613131565b82525050565b6126f881613143565b82525050565b600061270982612dc1565b6127138185612dcc565b9350612723818560208601613155565b61272c8161329a565b840191505092915050565b6000612744601d83612dcc565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b6000612784600283612ddd565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b60006127c4602283612dcc565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061282a601883612dcc565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b600061286a601583612dcc565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b60006128aa601583612dcc565b91507f4e6f7420656e6f75676820756e6465726c79696e6700000000000000000000006000830152602082019050919050565b60006128ea601583612dcc565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b600061292a601b83612dcc565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b61296681613096565b82525050565b612975816130d2565b82525050565b612984816130dc565b82525050565b600061299582612777565b91506129a182856126ab565b6020820191506129b182846126ab565b6020820191508190509392505050565b60006020820190506129d6600083018461267e565b92915050565b60006060820190506129f1600083018661267e565b6129fe602083018561267e565b612a0b604083018461296c565b949350505050565b6000604082019050612a28600083018561267e565b612a3560208301846126e0565b9392505050565b6000604082019050612a51600083018561267e565b612a5e602083018461296c565b9392505050565b6000602082019050612a7a600083018461268d565b92915050565b6000602082019050612a95600083018461269c565b92915050565b600060c082019050612ab0600083018961269c565b612abd602083018861267e565b612aca604083018761267e565b612ad7606083018661296c565b612ae4608083018561296c565b612af160a083018461296c565b979650505050505050565b6000608082019050612b11600083018761269c565b612b1e602083018661297b565b612b2b604083018561269c565b612b38606083018461269c565b95945050505050565b6000602082019050612b5660008301846126c2565b92915050565b6000602082019050612b7160008301846126d1565b92915050565b60006020820190508181036000830152612b9181846126fe565b905092915050565b60006020820190508181036000830152612bb281612737565b9050919050565b60006020820190508181036000830152612bd2816127b7565b9050919050565b60006020820190508181036000830152612bf28161281d565b9050919050565b60006020820190508181036000830152612c128161285d565b9050919050565b60006020820190508181036000830152612c328161289d565b9050919050565b60006020820190508181036000830152612c52816128dd565b9050919050565b60006020820190508181036000830152612c728161291d565b9050919050565b6000602082019050612c8e600083018461295d565b92915050565b6000602082019050612ca9600083018461296c565b92915050565b6000604082019050612cc4600083018561296c565b612cd1602083018461267e565b9392505050565b6000606082019050612ced600083018661296c565b612cfa602083018561267e565b612d0760408301846126e0565b949350505050565b6000606082019050612d24600083018661296c565b612d31602083018561267e565b612d3e60408301846126ef565b949350505050565b6000604082019050612d5b600083018561296c565b612d68602083018461296c565b9392505050565b6000606082019050612d84600083018661296c565b612d91602083018561296c565b612d9e604083018461296c565b949350505050565b6000602082019050612dbb600083018461297b565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000612df3826130d2565b9150612dfe836130d2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e3357612e3261320d565b5b828201905092915050565b6000612e49826130d2565b9150612e54836130d2565b925082612e6457612e6361323c565b5b828204905092915050565b6000808291508390505b6001851115612eb957808604811115612e9557612e9461320d565b5b6001851615612ea45780820291505b8081029050612eb2856132ab565b9450612e79565b94509492505050565b6000612ecd826130d2565b9150612ed8836130dc565b9250612f057fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612f0d565b905092915050565b600082612f1d5760019050612fd9565b81612f2b5760009050612fd9565b8160018114612f415760028114612f4b57612f7a565b6001915050612fd9565b60ff841115612f5d57612f5c61320d565b5b8360020a915084821115612f7457612f7361320d565b5b50612fd9565b5060208310610133831016604e8410600b8410161715612faf5782820a905083811115612faa57612fa961320d565b5b612fd9565b612fbc8484846001612e6f565b92509050818404811115612fd357612fd261320d565b5b81810290505b9392505050565b6000612feb826130d2565b9150612ff6836130d2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561302f5761302e61320d565b5b828202905092915050565b6000613045826130d2565b9150613050836130d2565b9250828210156130635761306261320d565b5b828203905092915050565b6000613079826130b2565b9050919050565b60008115159050919050565b6000819050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006130f4826130fb565b9050919050565b6000613106826130b2565b9050919050565b60006131188261311f565b9050919050565b600061312a826130b2565b9050919050565b600061313c826130d2565b9050919050565b600061314e826130d2565b9050919050565b60005b83811015613173578082015181840152602081019050613158565b83811115613182576000848401525b50505050565b600060028204905060018216806131a057607f821691505b602082108114156131b4576131b361326b565b5b50919050565b60006131c5826130d2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156131f8576131f761320d565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b6132c18161306e565b81146132cc57600080fd5b50565b6132d881613080565b81146132e357600080fd5b50565b6132ef8161308c565b81146132fa57600080fd5b50565b613306816130d2565b811461331157600080fd5b50565b61331d816130dc565b811461332857600080fd5b5056fea26469706673582212203b1d89d8a12e5bdd2fd8886b51b338c441711f497786f436bf07ffb08a6c0dd064736f6c63430008000033";
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
    static createInterface(): YVaultV4AssetProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): YVaultV4AssetProxy;
}
export {};
