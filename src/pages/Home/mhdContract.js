import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import mhdAbi from './mhdAbi';


const fortmaticKey = 'pk_test_89EAB55125C6D022';

const fm = new Fortmatic(fortmaticKey)
const web3 = new Web3(fm.getProvider())

export function createContract(contractAddress) {
  return new web3.eth.Contract(mhdAbi, contractAddress);
}
