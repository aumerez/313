import { ethers } from 'ethers';
import ABI from './NFT';
import TOAST_MESSAGE_TYPES from '../components/app-toast/app-toast.component';
import { saveMintTokens, getTokenId, getMintPrice } from '../firebase/firebase.utils.js';

// Creates transaction to mint NFT on clicking Mint Character button
const mintCharacter = async (numNFT, setShowToast, setToastContent, price) => {
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
      // const functionshere = await nftContract.estimateGas.mintTo(address, 0)
      // console.log('Funstions....', functionshere)
      console.log('Cantidad de nfts....', numNFT)
      console.log('Address....', address)
      console.log('Price....', price)
      console.log('Contrato....', nftContract)
      console.log('Cantidad pagada....', (price*numNFT).toString())
      const options = {value: ethers.utils.parseEther(((price*numNFT).toFixed(4)).toString())}
      let nftTx = await nftContract.mintTo(address, numNFT, options)
      // let nftTx = await nftContract.mintTo(address, numNFT)
      // console.log("Pruebas con el console log", nftTx.estimateGas.mintTo(address,0))
            
      console.log('Minting....', nftTx.hash)

      let tx = await nftTx.wait()
      console.log('Minted!', tx)
      let event = tx.events[0]
      console.log("Events", event);
      let value = event.args[2]
      console.log("Value", value);
      let tokenId = value.toNumber()
      console.log("TokeinId del ws.js", tokenId);

      if (await saveMintTokens(tokenId,numNFT)) {
        console.log("after saveMintTokens");
        
      } else {
        setToastContent({
          title: "Error",
          text: "Can't save this transaction",
          type: TOAST_MESSAGE_TYPES.ERROR
        })
        setShowToast(true);
      }

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
    console.log('Error minting character', error)
    setToastContent({
      title: 'Error minting character',
      text: error.error.message,
      type: TOAST_MESSAGE_TYPES.ERROR
    })
    setShowToast(true);
    console.log('Error minting character', error.error.message)
    
    //setTxError(error.message)
  }
  
}

export default mintCharacter;

