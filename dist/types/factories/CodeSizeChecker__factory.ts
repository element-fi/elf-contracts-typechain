/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CodeSizeChecker,
  CodeSizeCheckerInterface,
} from "../CodeSizeChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "which",
        type: "address",
      },
    ],
    name: "codeSize",
    outputs: [
      {
        internalType: "uint256",
        name: "ret",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061015c806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806352872cf314610030575b600080fd5b61004a60048036038101906100459190610080565b610060565b60405161005791906100b8565b60405180910390f35b6000813b9050919050565b60008135905061007a8161010f565b92915050565b60006020828403121561009257600080fd5b60006100a08482850161006b565b91505092915050565b6100b281610105565b82525050565b60006020820190506100cd60008301846100a9565b92915050565b60006100de826100e5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610118816100d3565b811461012357600080fd5b5056fea26469706673582212203624dae01d770af90f83dc8e50a3b4fd81c238d3174282d9c991c0d67b1ce61964736f6c63430008000033";

type CodeSizeCheckerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CodeSizeCheckerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CodeSizeChecker__factory extends ContractFactory {
  constructor(...args: CodeSizeCheckerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CodeSizeChecker> {
    return super.deploy(overrides || {}) as Promise<CodeSizeChecker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CodeSizeChecker {
    return super.attach(address) as CodeSizeChecker;
  }
  connect(signer: Signer): CodeSizeChecker__factory {
    return super.connect(signer) as CodeSizeChecker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CodeSizeCheckerInterface {
    return new utils.Interface(_abi) as CodeSizeCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CodeSizeChecker {
    return new Contract(address, _abi, signerOrProvider) as CodeSizeChecker;
  }
}
