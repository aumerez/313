import { ethers } from 'ethers';
import ABI from './NFT';
import TOAST_MESSAGE_TYPES from '../components/app-toast/app-toast.component';

// Creates transaction to mint NFT on clicking Mint Character button
const mintCharacter = async (numNFT, setShowToast, setToastContent) => {
  const nftContractAddress =  process.env.REACT_APP_NFT_CONTRACT_ADDRESS; 
  try {
    const { ethereum } = window
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(
        nftContractAddress,
        ABI,
        signer
      )

      const address = await signer.getAddress()
      const functionshere = await nftContract.estimateGas.mintTo(address, 0)
      console.log('Funstions....', functionshere)
      console.log('Cantidad de nfts....', numNFT)
      console.log('Address....', address)
      let nftTx = await nftContract.mintTo(address, numNFT)
      console.log("Pruebas con el console log", nftTx.estimateGas.mintTo(address,0))
            
      console.log('Minting....', nftTx.hash)

      let tx = await nftTx.wait()
      console.log('Minted!', tx)
      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()

      console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`)

    } else {
      setToastContent({
        title: "Metamask error",
        text: "Please install Metamask",
        type: TOAST_MESSAGE_TYPES.ERROR
      })
      setShowToast(true);

      console.log("Ethereum object doesn't exist!")
    }
  } catch (error) {
    setToastContent({
      title: 'Error minting character',
      text: error,
      type: TOAST_MESSAGE_TYPES.ERROR
    })
    setShowToast(true);
    console.log('Error minting character', error)
    
    //setTxError(error.message)
  }
  
}

export default mintCharacter;

