import { ethers, Contract } from 'ethers'
import { connect } from './providers'

const [network, provider, wallet] = connect()
const abi = ['function totalFarmRewards() public view returns (uint256)','function totalStaked() public view returns (uint256)']

export const getAPY = async (address) => {
    const truefarm = new ethers.Contract(address, abi, wallet)
    const totalFarmRewards = await truefarm.totalFarmRewards()/1e30
    const totalStaked = await truefarm.totalStaked()
    const dailyRate = (totalFarmRewards/totalStaked)*1e9
    const weeklyRate = dailyRate*7
    const APY = dailyRate*365
    return [dailyRate,weeklyRate,APY]
}


