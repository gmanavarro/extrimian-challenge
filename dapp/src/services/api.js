import contractData from '../contracts/ExtrimianChallenge';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
let contract;

export const startBlockchainConnection = async () => {
  contract = await getContract();
  console.log(contract);
};

export const getMessage = async () => {
  return contract.getMessage();
};

export const setMessage = async (message) => {
  const unsignedTransaction = await contract.populateTransaction.setMessage(
    message,
  );
  await signer.sendTransaction(unsignedTransaction);
};

const getContract = async () => {
  const contractABI = contractData.abi;
  const contractAddress =
    contractData.networks?.[process.env.REACT_APP_NETWORK_ID]?.address;

  return new ethers.Contract(contractAddress, contractABI, provider);
};
