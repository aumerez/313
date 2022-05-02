import React, { useEffect, useState }  from "react";
import { useSelector } from 'react-redux';
import mintCharacter from '../../web3/ws';
import Slider from '@mui/material/Slider';
import AppToast from "../app-toast/app-toast.component";

import { saveMintTokens, getTokenId, getMintPrice } from '../../firebase/firebase.utils.js';
import './mint-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';



const marks = [
  {
    value: 1,
    label: '',
  },
  // {
  //   value: 2,
  //   label: '2',
  // },
  // {
  //   value: 3,
  //   label: '3',
  // },
  // {
  //   value: 4,
  //   label: '4',
  // },
  // {
  //   value: 5,
  //   label: '5',
  // },
  // {
  //   value: 6,
  //   label: '6',
  // },
  // {
  //   value: 7,
  //   label: '7',
  // },
  // {
  //   value: 8,
  //   label: '8',
  // },
  // {
  //   value: 9,
  //   label: '9',
  // },
  {
    value: 10,
    label: '',
  }
];

const MintButton = () => {
  const wallet = useSelector(state => state.wallet.currentWallet); 
  const [tokenNumber, setTokenNumber] = useState(1);
  const [errorMessage, setErrorMessage ] = useState('');
  const [ showToast, setShowToast ] = useState(false);
  const [ disableMintButton, setDisableMintButton ] = useState(false);
  const [ buttonLabel, setButtonLabel ] = useState('MINT');
  const [ mintPrice, setMintPrice ] = useState('');
  const [ toastContent, setToastContent ] = 
    useState({
      title : '',
      text : '',
      type : null
    })
 
  const mint = async () => {
    console.log("Hice clic en el mint button");
    setDisableMintButton(true);
    setButtonLabel("MINTING...");
    let token = await getTokenId();
    let price = getMintPrice(token.tokenId);
    /* We pass the quanity of the selected nfts to mintCharacter function */
    mintCharacter(tokenNumber,setShowToast,setToastContent,price,setDisableMintButton,setButtonLabel);
    console.log("MINT", token.tokenId);
    console.log("mintPrice",getMintPrice(token.tokenId));
  }
  
  const handleChange = async (event) => {
    let tokenFirebase = await getTokenId();
    let mintPriceVar = await getMintPrice(tokenFirebase.tokenId);
    setTokenNumber(event.target.value);
    setMintPrice(mintPriceVar);
    console.log("Entendiendo console 1", tokenFirebase);
    console.log(event.target.value,tokenNumber);
  }
  
  return (
    <div>
      <button className='mint-btn' onClick={mint} disabled={disableMintButton}>
        { wallet ? 
          (<div>
            { buttonLabel} 
            <div className='mint-button-address-label'>
              {'The actual price of the minting is '}{mintPrice}
            </div>
          </div>) : (
            <div> {'MINT'}
            <div className='mint-button-address-label'>
              No Wallet Selected
            </div>
          </div>  
        ) }
      </button>
      <Slider 
        defaultValue={1}
        onChange={handleChange}
        aria-label="Always visible"
        valueLabelDisplay="on"
        min={1}
        max={10}
        marks={marks}
        sx={{
          color: '#c5f710',
          ml: 5,
          // mb: -3,
          fontSize: 40,
          display: { xs: 'none', md:'block' }
        }}
      />
      <div className="slide">
        {/* How many Socialites NFTs do you want? */}
      </div>
      { errorMessage ? 
        (<div className="error-message">
          {errorMessage}
        </div>) : null }
      <AppToast showToast={showToast} toastContent={toastContent} />
    </div>

    

  );
}

export default MintButton;