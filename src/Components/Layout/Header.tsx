import React from 'react';
import logo from './logo.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header(){
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: 'white',
  };

  return (
    <div style={headerStyle}>
      <img src={logo} alt="My Icon" />
      <ConnectButton />
    </div>
  );
};

export default Header;
