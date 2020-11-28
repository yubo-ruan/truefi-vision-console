import {getTruTotalSupply,getBurned,getCirculatingSupply,getTfiTotalSupply} from './src/supply'
import {getTruPrice,getEthPrice,getTruPriceInEth} from './src/price'


getTruTotalSupply().then(res => console.log("TRU totalSupply: " + parseInt(res['_hex'],16)))
getBurned().then(res => console.log("TRU burned: " + parseInt(res['_hex'],16)))
getCirculatingSupply().then(res => console.log("TRU CirculatingSupply: " + parseInt(res['_hex'],16)))


getTruPrice().then(res => console.log("TRU price: " + res + " USD"))
getTruPriceInEth().then(res => console.log("TRU price: " + res + " ETH"))
getEthPrice().then(res => console.log("ETH price: " + res + " USD"))


getTfiTotalSupply().then(res => console.log("TFI totalSupply: " + parseInt(res['_hex'],16)/1e18))
