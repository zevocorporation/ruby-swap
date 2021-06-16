export const userDetails=()=>{
    const address = getAddress()
    const balance = getBalance(address)
}

const getAddress=()=>{
    return window.ethereum.selectedAddress;
}

const getBalance = async(_address) => {
    return window.web3.eth.getBalance(_address);
}
