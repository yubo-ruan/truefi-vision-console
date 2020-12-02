import { ethers, providers, Wallet } from 'ethers'

const connect = (): [string, providers.Provider, Wallet] => {
  // get network from args
  const network = 'mainnet'

  // set provider from infura & network
  const provider = new providers.InfuraProvider(
    network, 'e33335b99d78415b82f8b9bc5fdc44c0')

  // use private key for wallet
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  
  return [network, provider, wallet]
}

export { connect }