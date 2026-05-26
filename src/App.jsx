import React from 'react'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='parent'>
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default App
