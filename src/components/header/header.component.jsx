import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/logo_white.png';
import button from '../../assets/imgs/button-wallet.png'

import './header.styles.scss';
import { maxHeight } from '@mui/system';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src= { Logo } id='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/' style={{ textDecoration: 'none' }}>
        HOME
      </Link>
      <Link className='option' to='/' style={{ textDecoration: 'none' }}>
            MINT
      </Link>
      <Link className='option' to='/'>
        <img src= { button } id='button' />
      </Link>
    </div>
  </div>
);

export default Header;
 
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import MetamaskButton from '../metamask-button/metamask-button.component';
// import { Link } from 'react-router-dom';

// import logo from '../../assets/imgs/logo_white.png'

// import './header.styles.css';
// import MENU_PAGES from './header.data';


// const linkStyle = {
//   textDecoration: "none",
//   color: 'white',
  
// };



// function Header() {

//   return (
//     <AppBar position="static" sx={{
//         background : 'none',
//         paddingTop: '10px',
//         paddingX: '30px'
//         }} elevation={0} variant="dense">
//             <Toolbar disableGutters>
//                 <Box className='logo-container'>
//                     <Link to='/'>
//                         <img src={logo} alt="logo" height="60px"/>
//                     </Link>
//                 </Box>
//             <Box className='' justifyContent='flex-end' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                 {MENU_PAGES.map(({path, label}) => (
//                 <Button 
//                     key={label}
//                     style={{ fontSize: '32px', textTransform: 'capitalize' }}
//                     sx={{ my: 2, color: 'white', display: 'block'}}
//                 >
//                     <Link to={path} style={linkStyle}>
//                     {label}
//                     </Link>
//                 </Button>
//                 ))}
//             </Box>
            
//             <Box className='metamask-button'>
//                 <MetamaskButton />
//             </Box>
//             </Toolbar>
//     </AppBar>
//   );

// }

// export default Header;
