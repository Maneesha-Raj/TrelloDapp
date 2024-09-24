import React from 'react'

const Sidebar = () => {
  return (
    <div>

 
    <div className="sidebar">
      <h2>Trello Workspace</h2>
      <ul>
        <a href="/trelloboard" className='font-semibold hover:text-sky-500'><li >Boards</li></a>
        <a href="/addmembers" className='font-semibold hover:text-sky-500'><li>Members</li></a>
        <a href="/workspace" className='font-semibold hover:text-sky-500'><li>Workspace</li></a>
        <a href="" className='font-semibold hover:text-sky-500'><li>Your boards</li></a>
      </ul>
      
    </div>




    </div>
  )
}

export default Sidebar
