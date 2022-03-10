import React, { useEffect }  from "react";
import '../../assets/fonts/LeagueGothic-Italic.otf';
import { useSelector, useDispatch } from 'react-redux';
//import web3 from 'web3';
import './mint-button.styles.scss';
import { Button, Stack, Typography } from "@mui/material";

const MintButton = () => {
  const wallet = useSelector(state => state.wallet.currentWallet); 

  const mint = async () => {
    console.log("MINT");
  }
  
  return (
    <Button onClick={mint} 
      variant="contained" 
      style={{ textTransform: 'capitalize', fontSize: 'medium'}}
      size='large'>
        { wallet ? 
        (<Stack direction="column" spacing={0}>
          <Typography variant="body1" color="white" align='center'>
            Mint
          </Typography>  
          <Typography variant="caption" color="white" fontSize='0.6rem' align='center'>
            {`${wallet.substring(0,10)}${'...'}`}
          </Typography>
        </Stack>) : 'No Wallet Selected'}        
    </Button>
  );
}

export default MintButton;