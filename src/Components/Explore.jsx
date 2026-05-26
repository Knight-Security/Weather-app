import React from 'react'
import { useState, useEffect } from 'react'
import Result from './Result'
const Explore = () => {
  const [recievedData, setrecievedData] = useState(null)
  const [pinArray, setpinArray] = useState([])
  const [city, setcity] = useState("")
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY
  async function fetchData() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        setrecievedData(data)
        console.log(data)
      }
      catch (err) {
        console.log(err.message)
      }
    }
  return (
    <div>
      <h1>DISCOVER</h1>
      <h1>THE ATMOSPHERE</h1>
      <div className="search-bar">
        <div className="Search-button-parent">
          < input value={city} onChange={(e) => setcity(e.target.value)} type="text" className='search-input' placeholder='Searching.....' />
          <button className="serach-button" onClick={() => fetchData()}><span className="material-symbols-outlined">
            search
          </span></button>
          {recievedData && <Result data={recievedData}/>}
        </div>
        <div className="trendingnow-bar">
          <h2>Trending Now</h2>
          <div className="trending-places">
            {/* cotains state location */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
