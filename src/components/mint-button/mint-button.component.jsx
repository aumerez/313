import React, { useState }  from "react";
import { useSelector } from 'react-redux';
import mintCharacter from '../../web3/ws';
import Slider from '@mui/material/Slider';


import './mint-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';
import { CaretDownSquareFill } from "react-bootstrap-icons";

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
  
  const mint = async () => {
    mintCharacter();
    console.log("MINT");
  }
  
  const handleChange = (event) => {
    setTokenNumber(event.target.value);
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
    </div>

    

  );
}

export default MintButton;