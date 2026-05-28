import React from 'react'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
const App = () => {
  const [pinArray, setPinArray] = useState([])
  function saveCity(city) {
    setPinArray((prev) => [...prev, city])
  }
  return (
    <div className='parent'>
      <Sidebar />
      <div className="main">
        <Outlet context={{ pinArray, saveCity }} />
      </div>
    </div>
  )
}

export default App
