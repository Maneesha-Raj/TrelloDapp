import React from 'react'
import Logo from '../assets/images/TrelloLogo.png'

const Navbar = () => {
  return (
    <div>

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


    </div>
  )
}

export default Navbar
