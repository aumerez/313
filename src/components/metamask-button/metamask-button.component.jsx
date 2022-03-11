import React, { useEffect }  from "react";
import { useSelector, useDispatch } from 'react-redux';

import { NETWORKS } from '../../web3/networks'
import { setCurrentWallet } from '../../redux/wallet/wallet.actions';

import './metamask-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';

const MetamaskButton = () => {
  const wallet = useSelector(state => state.wallet.currentWallet); 
  const dispatch = useDispatch();

  useEffect(()=> {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }
    
    const accountWasChanged = (accounts) => {
      dispatch (setCurrentWallet(accounts[0]));
      console.log("account was Changed",accounts[0]);
    }
    
    const getAndSetAccount = async () => {
      const { ethereum } = window;
      const network = ethereum.networkVersion; 
      if (network < NETWORKS.ETHEREUM_GOERLY) {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'});
        console.log(accounts);
        dispatch (setCurrentWallet(accounts[0]));
      } else {
        alert("Wrong Network. Please select Ethereum Network");
      }
    }
    
    const clearAccount = () => {
      dispatch (setCurrentWallet('0x0'));
      console.log("clearAcccount");
    }

    ethereum.on('accountsChanged', accountWasChanged);
    //ethereum.on('connect', getAndSetAccount);
    ethereum.on('disconnect', clearAccount);

    window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
      console.log('accounts', accounts);
      // No need to set account here, it will be set by the event listener
    }, error => {
      // Handle any UI for errors here, e.g. network error, rejected request, etc.
      // Set state as needed 
    })
    return () => {
      // Return function of a non-async useEffect will clean up on component leaving screen, or from re-reneder to due dependency change
      ethereum.removeListener('accountsChanged', accountWasChanged);
      //ethereum.off('connect', getAndSetAccount);
      ethereum.removeListener('disconnect', clearAccount);
    }


  },[dispatch])
 
  const connectWallet = async () => {
    const { ethereum } = window;
    if (ethereum && !wallet) {
      try {
        const network = ethereum.networkVersion; //await web3.eth.getChainId;
        if (network < NETWORKS.ETHEREUM_GOERLY) {
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts'});
          console.log(accounts);
          dispatch (setCurrentWallet(accounts[0]));
        } else {
          alert("Wrong Network. Please select Ethereum Network");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  
  return (
    <button className='button' onClick={connectWallet} >
      {wallet ? (
      <div>CONNECTED
        <div className='button-address-label'>{wallet.substring(0,15)}{'...'}</div>
      </div>) : (<div>CONNECT
          <div>WALLET</div>
          </div>) }
    </button>
  );
}

export default MetamaskButton;