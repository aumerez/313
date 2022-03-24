import React,  { useState }  from "react";
import { useSelector } from 'react-redux';
import mintCharacter from '../../web3/ws'; 

import './mint-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';
import OPTIONS from "./mint-button.data";


const MintButton = () => {
  const wallet = useSelector(state => state.wallet.currentWallet); 
  const [tokenNumber, setTokenNumber ] = useState(1);
  
  const mint = async () => {
    mintCharacter();
    console.log("MINT");
  }
  
  const handleChange = (event) => {
    setTokenNumber(event.target.value);
  }
  
  return (
    <div className="flex-container">
      <div className="flex-child">
        <div className="select">
          <select id="standard-select">
            { OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>))
            }
          </select>
          <span className="focus"></span>
        </div>
      </div>
      <div className="flex-child">
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
      </div>
      
    </div>

  );
}

export default MintButton;