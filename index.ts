import {contracts} from './src/constants'
import {getTruStat} from './src/tru'
import {getTfiTotalSupply, getPoolValue, getPoolJoined, getPoolExited} from './src/tfi'
import {getTruPrice} from './src/price'
import {getAPY} from './src/truefarm'
import {getAllLoanCreated} from './src/loan'




getTruStat().then(res => console.log(res))
getTruPrice().then(res => console.log(res))

getTfiTotalSupply().then(res => console.log("TFI totalSupply: " + res))
getPoolValue().then(res => console.log("Pool value: " + res + " TUSD"))
getAPY(contracts.trueFarmTfi).then(res => console.log("TrueFi LP Daily: " + res[0] + "%" + " Weekly: " + res[1] + "%" + " APY: " + res[2] + "%"))
getAPY(contracts.trueFarmUniEth).then(res => console.log("Uniswap ETH/TRU Daily: " + res[0] + "%" + " Weekly: " + res[1] + "%" + " APY: " + res[2] + "%"))

getAllLoanCreated().then(res => {
    res.forEach(element => {
        console.log(element)
    })
})

getPoolJoined().then(res => {
    res.forEach(element => {
        console.log(element)
    })
})

getPoolExited().then(res => {
    res.forEach(element => {
        console.log(element)
    })
})
