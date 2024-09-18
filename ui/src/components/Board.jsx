

import React, { useState, useEffect } from 'react';
import List from './List';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

const Board = () => {
  const [lists, setLists] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Initialize Ethereum provider
    const initProvider = async () => {
      const ethProvider = await detectEthereumProvider();
      if (ethProvider) {
        setProvider(new ethers.providers.Web3Provider(ethProvider));
      } else {
        console.error('MetaMask not detected');
      }
    };

    initProvider();
  }, []);

  const connectMetaMask = async () => {
    if (provider) {
      try {
        await provider.send("eth_requestAccounts", []);
        const newSigner = provider.getSigner();
        setSigner(newSigner);
        setConnected(true);
      } catch (error) {
        console.error('User rejected the connection request');
      }
    } else {
      console.error('Provider not found');
    }
  };

  return (
    <div className="board">
      {!connected ? (
        <button onClick={connectMetaMask}>Connect to MetaMask</button>
      ) : (
        <div>
          <p>Connected to MetaMask</p>
          {/* Render lists after connecting */}
          {lists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;










