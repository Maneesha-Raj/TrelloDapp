



// ProjectAddpage.js
import React, { useState } from 'react';

const ProjectAddpage = ({ onSave }) => {
  const [projectName, setProjectName] = useState('');
  const [members, setMembers] = useState(['']);
  const [dueDate, setDueDate] = useState('');
  const [checklist, setChecklist] = useState(['']);

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleChecklistChange = (index, value) => {
    const newChecklist = [...checklist];
    newChecklist[index] = value;
    setChecklist(newChecklist);
  };

  const handleAddChecklistItem = () => {
    setChecklist([...checklist, '']);
  };

  const handleSave = () => {
    onSave(projectName, members, dueDate, checklist); // Pass data to parent component
  };

  return (
    <div>
      <h1>Add New Project</h1>

      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
      />

      {members.map((member, index) => (
        <input
          key={index}
          type="text"
          value={member}
          onChange={(e) => handleMemberChange(index, e.target.value)}
          placeholder={`Member ${index + 1}`}
        />
      ))}
      <button onClick={handleAddMember}>+ Add Member</button>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {checklist.map((item, index) => (
        <input
          key={index}
          type="text"
          value={item}
          onChange={(e) => handleChecklistChange(index, e.target.value)}
          placeholder={`Checklist item ${index + 1}`}
        />
      ))}
      <button onClick={handleAddChecklistItem}>+ Add Checklist Item</button>

      <button onClick={handleSave}>Save Project</button>
    </div>
  );
};

export default ProjectAddpage;
