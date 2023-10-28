import React from 'react';
import logo from './logo.svg'

function Header(){
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#131619',
  };

  const buttonStyle = {
    padding: '15px 25px',
    fontSize: '16px',
    border:'0',
    borderRadius: '12px',
    backgroundColor: '#9ff3ff',
  };

  return (
    <div style={headerStyle}>
      <img src={logo} alt="My Icon" />
      <button style={buttonStyle}>Connect Wallet</button>
    </div>
  );
};

export default Header;
