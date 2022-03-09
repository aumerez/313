import * as React from 'react';
import './metamask-button.styles.scss';
import '../../assets/fonts/LeagueGothic-Italic.otf';

import { connect } from 'react-redux';
import { setCurrentWallet } from '../../redux/wallet/wallet.actions';

class MetamaskButton extends React.Component {

 async componentDidMount() {
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
  }
  
  render() {
    return (
      <button className='button' onClick={this.connectWallet}>
        {this.props.currentWallet ? 'Connected' : 'Connect \n Wallet'}
      </button>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currentWallet: wallet.currentWallet
});

const mapDispatchToProps = dispatch => ({
  setCurrentWallet: wallet => dispatch(setCurrentWallet(wallet))
})

export default connect(mapStateToProps, mapDispatchToProps)(MetamaskButton);