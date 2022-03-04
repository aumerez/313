import * as React from 'react';
import Button from '@mui/material/Button';
import './metamask-button.styles.scss';


class MetamaskButton extends React.Component {

 /* async componentDidMount() {
    const { setCurrentWallet } = this.props;

    const { ethereum } = window;
    if (ethereum) {
      try {
        const accounts = await ethereum.request({
          method: 'eth_accounts'});
        if (accounts.length > 0) {
          setCurrentWallet({
            address: accounts[0]
          })
        }
      } catch (e) {
        console.log(e);
      }
    }
  }  

  connectWallet = async () => {
    const { setCurrentWallet } = this.props;
    const { ethereum } = window;
    if (ethereum && !this.props.currentWallet) {
      console.log("dentro del if");
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'});
        console.log(accounts);
        setCurrentWallet({
          address: accounts[0]
        })
      } catch (e) {
        console.log(e);
      }
    }
  }*/
  
  render() {
    return (
      <button className='button'><img src={require('../../assets/imgs/button-wallet.png')}></img></button>
    );
  }
}

export default MetamaskButton;