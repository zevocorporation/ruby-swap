import Web3 from "web3"

export const getQuote = async (_amount, _path) => {
    const amount = Web3.utils.toBN(_amount * 10 ^ 18);
    //const amount = String(Web3.utils.toWei(_amount))
    return window.router.methods.getAmountsOut(amount,_path).call()
}