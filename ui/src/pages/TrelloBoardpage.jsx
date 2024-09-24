import React, { useState } from 'react';
import { ethers } from 'ethers';
import Board from '../components/Board';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { TrelloModule } from '../scdata/deployed_addresses.json';
import { abi } from '../scdata/Trello.json';
import Modal from 'react-modal';  // Import modal component

const TrelloBoardPage = () => {
  const [addingList, setAddingList] = useState(false);
  const [listTitle, setListTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [projectNames, setProjectNames] = useState({});
  const [addingCard, setAddingCard] = useState(null);

  // Modal state for adding project
  const [modalOpen, setModalOpen] = useState(false);
  const [currentListId, setCurrentListId] = useState(null);

  // Form states inside modal
  const [projectName, setProjectName] = useState('');
  const [members, setMembers] = useState(['']);
  const [dueDate, setDueDate] = useState('');
  const [checklist, setChecklist] = useState(['']);

  // Function to get the contract using a signer (to send transactions)
  async function getContractWithSigner() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return new ethers.Contract(TrelloModule, abi, signer);
    }
    return null;
  }

  // Function to add a new list via blockchain interaction
  const handleAddList = async () => {
    if (!listTitle) {
      alert('Please enter a list title');
      return;
    }

    try {
      const contract = await getContractWithSigner();
      if (contract) {
        const tx = await contract.createList(listTitle);
        await tx.wait();

        const newList = {
          id: lists.length + 1,
          title: listTitle,
          cards: []
        };
        setLists([...lists, newList]);
        setListTitle('');
        setAddingList(false);
      }
    } catch (error) {
      console.error('Error adding list:', error);
      alert('Failed to add the list');
    }
  };

  // Open the modal for adding a project
  const openAddProjectModal = (listId) => {
    setCurrentListId(listId);
    setModalOpen(true);
  };

  // Handle input change for members and checklist
  const handleMemberChange = (index, value) => {
    const updatedMembers = [...members];
    updatedMembers[index] = value;
    setMembers(updatedMembers);
  };

  const handleChecklistChange = (index, value) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index] = value;
    setChecklist(updatedChecklist);
  };

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleAddChecklistItem = () => {
    setChecklist([...checklist, '']);
  };

  const handleSaveProject = async () => {
    if (!projectName) {
      alert('Please enter a project name');
      return;
    }
  
    try {
      const contract = await getContractWithSigner();
      if (contract) {
        // Convert checklist to the correct format (array of { text, completed })
        const formattedChecklist = checklist.map(item => ({
          text: item,
          completed: false  // Default to not completed
        }));
  
        // Call addProject function on the smart contract
        const tx = await contract.addProject(
          currentListId, 
          projectName, 
          members, 
          dueDate, 
          formattedChecklist
        );
        await tx.wait();  // Wait for the transaction to be mined
  
        // Update local state after saving on blockchain
        const updatedLists = lists.map(list => {
          if (list.id === currentListId) {
            return {
              ...list,
              cards: [...list.cards, { id: list.cards.length + 1, name: projectName, members, dueDate, checklist: formattedChecklist }]
            };
          }
          return list;
        });
  
        setLists(updatedLists);
        setModalOpen(false);  // Close modal after saving project
        resetModalFields();   // Reset modal fields
      }
    } catch (error) {
      console.error('Error saving project to blockchain:', error);
      alert('Failed to save project to blockchain');
    }
  };
  

  const resetModalFields = () => {
    setProjectName('');
    setMembers(['']);
    setDueDate('');
    setChecklist(['']);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex items-center justify-between bg-purple-800 text-white px-4 py-2">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Board3</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-sm">Power-Ups</button>
          <button className="text-sm">Automation</button>
        </div>
      </div>

      <div className="flex">
        <Sidebar />

        <div className="flex-grow bg-pink-500 p-4">
          <Board lists={lists} />

          {addingList ? (
            <div className="bg-pink-400 text-white rounded-md p-4 w-64 space-y-2">
              <input
                type="text"
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
                placeholder="Enter list title"
                className="w-full px-2 py-1 text-black rounded-md"
              />
              <button onClick={handleAddList} className="bg-blue-600 px-4 py-2 rounded-md text-white w-full">
                Add List
              </button>
            </div>
          ) : (
            <div className="bg-pink-400 text-white rounded-md p-4 cursor-pointer w-48" onClick={() => setAddingList(true)}>
              + Add another list
            </div>
          )}

          {lists.map(list => (
            <div key={list.id} className="mt-4 bg-pink-600 p-4 rounded-md">
              <h3 className="text-white font-bold">{list.title}</h3>
              <button
                onClick={() => openAddProjectModal(list.id)}
                className="mt-2 bg-blue-600 px-4 py-2 rounded-md text-white w-full"
              >
                + Add Card
              </button>
            </div>
          ))}

          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            contentLabel="Add Project Modal"
            className="bg-white p-4 rounded-md shadow-lg w-[500px]"
            overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          >
            <h1 className="text-xl mb-4">Add New Project</h1>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project Name"
              className="w-full px-2 py-1 mb-2 border border-gray-300 rounded-md"
            />
            {members.map((member, index) => (
              <input
                key={index}
                type="text"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
                placeholder={`Member ${index + 1}`}
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded-md"
              />
            ))}
            <button onClick={handleAddMember} className="mb-2 text-blue-600">+ Add Member</button>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-2 py-1 mb-2 border border-gray-300 rounded-md"
            />

            {checklist.map((item, index) => (
              <input
                key={index}
                type="text"
                value={item}
                onChange={(e) => handleChecklistChange(index, e.target.value)}
                placeholder={`Checklist item ${index + 1}`}
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded-md"
              />
            ))}
            <button onClick={handleAddChecklistItem} className="mb-2 text-blue-600">+ Add Checklist Item</button>

            <button onClick={handleSaveProject} className="mt-4 bg-blue-600 px-4 py-2 text-white rounded-md">
              Save Project
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TrelloBoardPage;
