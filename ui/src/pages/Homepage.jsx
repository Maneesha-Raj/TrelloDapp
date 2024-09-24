
//Homepage.jsx


import React, { useState } from 'react';
import Board from '../components/Board';
import '../App.css';
import { ethers } from 'ethers';  // Ensure you've installed ethers: npm install ethers
import Sidebar from '../components/Sidebar';

// Homepage Component (Arrow Function)
const Homepage = () => {
  const [userAddress, setUserAddress] = useState("");

  // Sidebar Component
  <Sidebar/>

  // Header Component with 'Connect to Metamask' button
  const Header = () => (
    <div className="header">
      <h1>My Trello board</h1>
      <div className="header-right">
        <button className="share-button">Create Board</button>
        <button className="user-icon">M</button>
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default Homepage;















//------------------------------------------------------------------------------------------------------

