
//AddMemberspage.jsx


// import React from 'react'
import React, { useState } from 'react';

const AddMemberspage = () => {
                // Manage members and invitations
            const [members, setMembers] = useState([
                { name: 'maneesha.ceecs24', email: 'maneesha.ceecs24@duk.ac.in', lastActive: 'September 2024', role: 'Admin' },
                { name: 'esha251100', email: 'esha251100', lastActive: 'No recent activity', role: 'Pending' },
            ]);

  return (
    <div>

    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
    

      {/* Collaborators section */}
      <div className="flex flex-col mt-6 bg-white rounded-lg shadow p-4">

    
        <h2 className="text-xl font-bold mb-4">Collaborators</h2>

             {/* Invite Members section */}
        <div className="mt-6">
          <h3 className="text-lg">Add members to join you</h3>
          

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter email"
              className="border rounded-md px-3 py-2 w-full mr-4"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              ADD
            </button>
          </div>
        </div>




        {/* Workspace members and invitations */}
        <div className="flex">
          {/* Members list */}
          <div className="w-full">
            <div className="flex justify-between border-b pb-2 mb-2">
              <h3 className="text-lg">Workspace members </h3>
            </div>

            <div>
              {members.map((member, index) => (
                <div key={index} className="flex justify-between items-center border-b py-3">
                  <div className="flex items-center">
                    <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                      {member.name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="font-bold">{member.name}</p>
                      <p className="text-sm text-gray-500">Last active {member.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-blue-600 underline mr-4">View boards (3)</button>
                    {member.role === 'Admin' && <span className="px-3 py-1 bg-gray-300 rounded-md text-sm mr-4">Admin</span>}
                    {member.role === 'Pending' && <span className="px-3 py-1 bg-gray-300 rounded-md text-sm mr-4">Pending</span>}
                    {member.role === 'Admin' ? (
                      <button className="text-gray-500">Leave...</button>
                    ) : (
                      <button className="text-gray-500">Remove...</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  







    </div>
  )
}

export default AddMemberspage



