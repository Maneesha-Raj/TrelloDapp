import React from 'react'

const Loginpage = () => {
  return (
    <div>
      
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                      <div className="text-center mb-8">
                       
                        <h1 className="text-2xl font-bold">Log in to continue</h1>
                      </div>

                      <form>
                        <div className="mb-6 ">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full my-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          />

                          <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full my-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          />


                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                         Log in
                        </button>

                        

                       

                      

                        <div className="text-center mt-6">
                          <p>
                            New to Trello?{' '}
                            <a href="#" className="text-blue-500 underline">
                             Sign Up
                            </a>
                          </p>
                        </div>
                      </form>

                     
                    </div>
                  </div>
  




    </div>
  )
}

export default Loginpage
