import React, { useState }  from "react";
import { useSelector } from 'react-redux';
import mintCharacter from '../../web3/ws';
import Slider from '@mui/material/Slider';
import AppToast from "../app-toast/app-toast.component";

import { saveMintTokens, getTokenId, getMintPrice } from '../../firebase/firebase.utils.js';
import './mint-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';
import { CaretDownSquareFill } from "react-bootstrap-icons";

import { TOAST_MESSAGE_TYPES } from "../app-toast/app-toast.component";

const marks = [
  {
    value: 1,
    label: '1 Token',
  },
  {
    value: 10,
    label: '10 Tokens',
  }
];

const MintButton = () => {
  const wallet = useSelector(state => state.wallet.currentWallet); 
  const [tokenNumber, setTokenNumber] = useState(1);
  const [errorMessage, setErrorMessage ] = useState('');
  const [ showToast, setShowToast ] = useState(false);
  const [ toastContent, setToastContent ] = 
    useState({
      title : '',
      text : '',
      type : null
    })
 
  const mint = async () => {
    let token = await getTokenId();
    let price = getMintPrice(token.tokenId);
    /* We pass the quanity of the selected nfts to mintCharacter function */
    mintCharacter(tokenNumber,setShowToast,setToastContent,price);
    console.log("MINT", token.tokenId);
    console.log("mintPrice",getMintPrice(token.tokenId));
  }
  
  const handleChange = (event) => {
    setTokenNumber(event.target.value);
    console.log("Entendiendo console");
    console.log(event.target.value,tokenNumber);
  }
  
  return (
    <div>
      <button className='mint-btn' onClick={mint}>
        { wallet ? 
          (<div>
            { 'MINT' } 
            <div className='mint-button-address-label'>
              {wallet.substring(0,15)}{'...'}
            </div>
          </div>) : (
            <div>MINT
            <div className='mint-button-address-label'>
              No Wallet Selected
            </div>
          </div>  
        ) }
      </button>
      <Slider
        defaultValue={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        sx={{
          color: '#c5f710'
        }}
      />
      { errorMessage ? 
        (<div className="error-message">
          {errorMessage}
        </div>) : null }
      <AppToast showToast={showToast} toastContent={toastContent} />
    </div>

    

  );
}

export default MintButton;