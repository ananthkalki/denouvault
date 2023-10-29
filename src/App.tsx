import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Main from './Components/Main/Main';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey:'40c6071febfd93f4fe485c232a8a4cd9'}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Xinvault',
  projectId: '72d50d8e46eff68d215c23a8ce89d1d3',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>

        <div className="App">
          <Header />
          <Main />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
