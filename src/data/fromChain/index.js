import Web3 from "web3";
import { Factory_ABI, Router_ABI } from "./abis";
import { Factory_Address,Router_Address } from "./addresses";

export const init=()=>{
    const provider = checkProvider();
    const web3 = new Web3(provider);
    initializeContracts(web3);
   
}

const checkProvider = () => {
    let status;
    if (window.ethereum.selectedAddress != null) {
        status = window.ethereum;
    } else {
        status = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/6a440ccec5fb45f0858a51610c480c6a");
    }
    return status;
}

const initializeContracts = (_web3) => {
     const Factory = new _web3.eth.Contract(Factory_ABI, Factory_Address);
    const Router = new _web3.eth.Contract(Router_ABI, Router_Address);
    window.router = Router;
    window.factory = Factory;
}