/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ArbitraryDistributor } from "./ArbitraryDistributor";

export class ArbitraryDistributorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ArbitraryDistributor> {
    return super.deploy(overrides || {}) as Promise<ArbitraryDistributor>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ArbitraryDistributor {
    return super.attach(address) as ArbitraryDistributor;
  }
  connect(signer: Signer): ArbitraryDistributorFactory {
    return super.connect(signer) as ArbitraryDistributorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitraryDistributor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArbitraryDistributor;
  }
}

const _abi = [
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
    name: "amount",
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
    name: "beneficiary",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "empty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_trustToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "initialize",
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
    name: "remaining",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [],
    name: "trustToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ca5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806391c05b0b11610076578063d13deb2f1161005b578063d13deb2f14610188578063f2a75fe414610190578063f2fde38b14610198576100be565b806391c05b0b14610163578063aa8c217c14610180576100be565b806355234ec0116100a757806355234ec014610139578063715018a6146101535780638da5cb5b1461015b576100be565b80631794bb3c146100c357806338af3eed14610108575b600080fd5b610106600480360360608110156100d957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356101cb565b005b610110610349565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610141610365565b60408051918252519081900360200190f35b61010661036b565b61011061046b565b6101066004803603602081101561017957600080fd5b5035610487565b6101416105bf565b6101106105c5565b6101066105e1565b610106600480360360208110156101ae57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107c3565b600054610100900460ff16806101e457506101e461094e565b806101f2575060005460ff16155b610247576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610c42602e913960400191505060405180910390fd5b600054610100900460ff161580156102ad57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6102b5610954565b6034805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255603580549287169290911691909117905560368290556037829055801561034357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050565b60355473ffffffffffffffffffffffffffffffffffffffff1681565b60375481565b610373610ae4565b60335473ffffffffffffffffffffffffffffffffffffffff9081169116146103fc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60335460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b60355473ffffffffffffffffffffffffffffffffffffffff1633146104f7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526039815260200180610c096039913960400191505060405180910390fd5b60375461050a908263ffffffff610ae816565b603755603454604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101849052905173ffffffffffffffffffffffffffffffffffffffff9092169163a9059cbb916044808201926020929091908290030181600087803b15801561058757600080fd5b505af115801561059b573d6000803e3d6000fd5b505050506040513d60208110156105b157600080fd5b50516105bc57600080fd5b50565b60365481565b60345473ffffffffffffffffffffffffffffffffffffffff1681565b6105e9610ae4565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461067257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603454604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163a9059cbb91339184916370a08231916024808301926020929190829003018186803b1580156106ec57600080fd5b505afa158015610700573d6000803e3d6000fd5b505050506040513d602081101561071657600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909316600484015260248301919091525160448083019260209291908290030181600087803b15801561078c57600080fd5b505af11580156107a0573d6000803e3d6000fd5b505050506040513d60208110156107b657600080fd5b50516107c157600080fd5b565b6107cb610ae4565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461085457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166108c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610be36026913960400191505060405180910390fd5b60335460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b303b1590565b600054610100900460ff168061096d575061096d61094e565b8061097b575060005460ff16155b6109d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610c42602e913960400191505060405180910390fd5b600054610100900460ff16158015610a3657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000610a40610ae4565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156105bc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b3390565b6000610b2a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610b31565b9392505050565b60008184841115610bda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b9f578181015183820152602001610b87565b50505050905090810190601f168015610bcc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734172626974726172794469737472696275746f723a204f6e6c792062656e65666963696172792063616e207265636569766520746f6b656e73436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a264697066735822122078db11fe41201c531e21159461c8a12ac2013dbc4ea5d819da7daf6709067aef64736f6c634300060a0033";