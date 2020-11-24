/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClaimableOwnable } from "./ClaimableOwnable";

export class ClaimableOwnableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ClaimableOwnable> {
    return super.deploy(overrides || {}) as Promise<ClaimableOwnable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClaimableOwnable {
    return super.attach(address) as ClaimableOwnable;
  }
  connect(signer: Signer): ClaimableOwnableFactory {
    return super.connect(signer) as ClaimableOwnableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimableOwnable {
    return new Contract(address, _abi, signerOrProvider) as ClaimableOwnable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "burnMax",
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
    name: "burnMin",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canBurn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805460ff19169055600060068190556007556103e860155534801561002a57600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36103d9806100836000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635c131d701161005b5780635c131d70146100ed5780638da5cb5b146100f5578063e30c397814610126578063f2fde38b1461012e5761007d565b806302d3fdc9146100825780633820a6861461009c5780634e71e0c8146100e3575b600080fd5b61008a610161565b60408051918252519081900360200190f35b6100cf600480360360208110156100b257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610167565b604080519115158252519081900360200190f35b6100eb61017c565b005b61008a610298565b6100fd61029e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100fd6102ba565b6100eb6004803603602081101561014457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102d6565b60065481565b60176020526000908152604090205460ff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6f6e6c792070656e64696e67206f776e65720000000000000000000000000000604482015290519081900360640190fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60075481565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fea2646970667358221220a917f447e098691a13fdff35b8764ba304359fc0e3f4d3dadcfc51d482917e4b64736f6c634300060a0033";