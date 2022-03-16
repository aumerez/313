import React  from "react";
import { useSelector } from 'react-redux';
import mintCharacter from '../../web3/ws'; 

import './mint-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';


const MintButton = () => {
  const wallet = useSelector(state => state.wallet.currentWallet); 

  const mint = async () => {
    mintCharacter();
    console.log("MINT");
  }
  
  
  return (
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

  );
}

export default MintButton;