import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/logo_white.png';

import MetamaskButton from '../metamask-button/metamask-button.component';

import './header.styles.scss';


const Header = () => (

  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src= { Logo } id='logo'/>
    </Link>
    <div className='options'>
        <Link className='option' to='/' style={{ textDecoration: 'none' }}>
            HOME
        </Link>
        <Link className='option' to='/mint' style={{ textDecoration: 'none' }}>
            MINT
        </Link>
        <Link className='option' to='/'>
            <MetamaskButton />
        </Link>
    </div>
  </div>
);

export default Header;