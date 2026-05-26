import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='SideBar-parent'>
      <ul className='Side-Bar-List'>
        <li><NavLink to="Dashboard">Dashboard</NavLink></li>
        <li><NavLink to="Explore"><span className="material-symbols-outlined">
          explore
        </span>Explore</NavLink></li>
        <li><NavLink to="Saved"><span className="material-symbols-outlined">
          bookmarks
        </span>Saved</NavLink></li>
        <li><NavLink to="Detailed"><span className="material-symbols-outlined">
          partly_cloudy_day
        </span>Detailed Explore</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar
