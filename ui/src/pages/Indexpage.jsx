
//Indexpage.jsx


import React from 'react'
import Logo from '../assets/images/TrelloLogo.png'
import { BrowserProvider } from 'ethers';



const Indexpage = () => {

    const provider = new BrowserProvider(window.ethereum);
    async function connectToMetamask() {
        try {
            const signer = await provider.getSigner();
            const address = await signer.getAddress(); 
            console.log("Address", address);
        } catch (error) {
            console.error("Failed to connect to Metamask:", error);
        }
    }



  return (
    <div>
      

                <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400">
                {/* Navbar */}
                <nav className="bg-white py-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                        src={Logo}
                        alt="Trello Logo"
                        className="h-8 w-8"
                        />
                        <span className="font-semibold text-lg ">Trello</span>
                    </div>

                        

                   

                    </div>
                </nav>

                {/* Main Hero Section */}
                <section className="p-64 text-white text-center">
                    <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-4xl md:text-8xl font-bold mb-6">Trello Dapp</h1>
                    <p className="text-lg md:text-xl mb-8">Keep everything in the same place—even if your team isn’t.</p>

                    <div className="flex justify-center space-x-4">
                        <a href="/home"><button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700" onClick={connectToMetamask}>
                        Get Started
                        </button></a>
                    </div>

                 
                    </div>

                   
                </section>
                </div>





    </div>
  )
}

export default Indexpage




