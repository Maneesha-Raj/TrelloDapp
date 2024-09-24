

//------------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { TrelloModule } from '../scdata/deployed_addresses.json';
import { abi } from '../scdata/Trello.json';

const ViewWorkspacePage = () => {
  const [lists, setLists] = useState([]);

  // Function to get the contract using a signer
  async function getContract() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      return new ethers.Contract(TrelloModule, abi, provider);
    }
    return null;
  }

  // Fetch lists from blockchain
  const fetchLists = async () => {
    try {
      const contract = await getContract();
      if (contract) {
        const listCount = await contract.listCount();
        const fetchedLists = [];

        for (let i = 1; i <= listCount; i++) {
          const list = await contract.getList(i);
          fetchedLists.push(list);
        }

        setLists(fetchedLists);
      }
    } catch (error) {
      console.error('Error fetching lists from blockchain:', error);
    }
  };

  // Fetch the lists when the component loads
  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Workspace</h2>

          {lists.length === 0 ? (
            <div className="mt-4 text-center text-gray-500">
              No lists available yet
            </div>
          ) : (
            lists.map((list) => (
              <div
                key={list.id}
                className="max-w-lg p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {list.title}
                </h3>
                <p className="text-gray-500 mb-3">{`List ID: ${list.id}`}</p>

                {list.projects.length === 0 ? (
                  <div className="text-gray-500">No projects yet</div>
                ) : (
                  list.projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 mb-4 bg-gray-100 border border-gray-300 rounded-lg"
                    >
                      <h6 className="text-lg font-medium text-gray-900">
                        {project.name}
                      </h6>
                      <p className="text-gray-500">
                        <strong>Members:</strong> {project.members.join(', ')}
                      </p>
                      <p className="text-gray-500">
                        <strong>Due Date:</strong> {project.dueDate}
                      </p>
                      
                      <p className="text-gray-500">
                        <strong>Checklists</strong> 
                        <h1>{project.checklist}</h1>
                      </p>
                    </div>
                  ))
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewWorkspacePage;
