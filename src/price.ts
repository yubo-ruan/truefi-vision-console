import { ethers, utils, BigNumber, Contract } from 'ethers'
import { connect } from './providers'
import { getContract, fromTrustToken } from './utils'
import { contracts, wallets } from './constants'

const [network, provider, wallet, contractAt] = connect()
let uniswapEthTru = new ethers.Contract(contracts.uniswapEthTru, ['function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)'], wallet)
let uniswapEthUsdc = new ethers.Contract(contracts.uniswapEthUsdc, ['function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)'], wallet)

export const getTruPriceInEth = async() => {
    let reserves = await uniswapEthTru.getReserves()
    let res0 = reserves["_reserve0"]
    let res1 = reserves["_reserve1"]/1e10
    let price = res1/res0
    return price;
}

export const getEthPrice = async() => {
    let reserves = await uniswapEthUsdc.getReserves()
    let res0 = reserves["_reserve0"]/1e6
    let res1 = reserves["_reserve1"]/1e18
    let price = res0/res1
    return price;
}

export const getTruPrice = async() => {
    const truPrice = await getTruPriceInEth()
    const ethPrice = await getEthPrice()
    return truPrice*ethPrice;
}