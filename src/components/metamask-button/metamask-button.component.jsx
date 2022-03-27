import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from 'react-redux';

import AppToast from "../app-toast/app-toast.component";
import { TOAST_MESSAGE_TYPES } from "../app-toast/app-toast.component";

import { NETWORKS_LABEL } from '../../web3/networks'
import { setCurrentWallet } from '../../redux/wallet/wallet.actions';

import './metamask-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';

const MetamaskButton = () => {
  const [showMetamask, setShowMetamask ] = useState(false);
  const wallet = useSelector(state => state.wallet.currentWallet); 
  const dispatch = useDispatch();
  const [ showToast, setShowToast ] = useState(false);
  const [ toastContent, setToastContent ] = 
    useState({
      title : '',
      text : '',
      type : null
    })

  const ETHEREUM_NETWORK = process.env.REACT_APP_ETHEREUM_NETWORK;

  useEffect(()=> {
    if (showMetamask || wallet) {
      const { ethereum } = window;
      if (!ethereum) {
        return;
      }
      
      const accountWasChanged = (accounts) => {
        dispatch (setCurrentWallet(accounts[0]));
        console.log("account was Changed",accounts[0]);
      }
      
      const clearAccount = () => {
        dispatch (setCurrentWallet('0x0'));
        console.log("clearAcccount");
      }
  
      ethereum.on('accountsChanged', accountWasChanged);
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
        ethereum.removeListener('disconnect', clearAccount);
      }
    }
    


  },[dispatch,wallet,showMetamask])
 
  const connectWallet = async () => {
    
    const { ethereum } = window;
    if (ethereum && !wallet) {
      try {
        const network = ethereum.networkVersion; 
        if (network === ETHEREUM_NETWORK) {
          setShowMetamask(true);
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts'});
          console.log(accounts);
          dispatch (setCurrentWallet(accounts[0]));
        } else {
          setToastContent({
            title: 'Network Error',
            text: `Wrong Network. Expected ${NETWORKS_LABEL[ETHEREUM_NETWORK]} Network`,
            type: TOAST_MESSAGE_TYPES.ERROR
          })
          setShowToast(true);
        }
      } catch (e) {
        console.log("Error mio", e);
        setShowToast(true);
      }
    }
  }
  
  return (
    <div>
     
      <button className='button' onClick={connectWallet} >
        {wallet ? (
        <div>Connected
          <div className='button-address-label'>{wallet.substring(0,15)}{'...'}</div>
        </div>) : (<div>Connect
            <div>Wallet</div>
            </div>) }
      </button>
      <AppToast showToast={showToast} toastContent={toastContent} />
    </div>
    
  );
}

export default MetamaskButton;