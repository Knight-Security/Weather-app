import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard-parent'>
      <div className="upper-content">
        <div className="overview">
          <div>
            <h2>INDIA</h2>
            <h4>DAY</h4>
            <h2>TEMPERATURE</h2>
          </div>
          <div className='leftside-parent'>
            <div className="leftside">
              <h2>SUNNY</h2>
              <h5>FEELS LIKE 72</h5>
            </div>
          </div>
        </div>
        <div className="weather-stats">
          {/* because er are going to use grid over here  */}
          <div className="wrapper">
            {/* there will be two thing inside my grid */}
            {/* like wind will have display flex
              flex direction:column */}
            {/* upper one sure conatins  */}
            {/* then we will do display flex and justify content space between */}
            <div className="wind">
              <div className="wind-icon">
                <span className="material-symbols-outlined">
                  air
                </span>
                <h5 className='wind-name'>Wind</h5>
              </div>
              <div className="wind-data">
                temp
              </div>
            </div>
            <div className="humidity">
              <div className="humidity-icon">
                <span class="material-symbols-outlined">
                  humidity_percentage
                </span>
                <h5 className='humidity-name'>Humidity</h5>
              </div>
              <div className="humidity-data">
                temp
              </div>
            </div>
            <div className="uv-index">
              <div className="uv-icon">
                <span class="material-symbols-outlined">
                  sunny
                </span>
                <h5 className='uv-name'>UV INDEX</h5>
              </div>
              <div className="uv-data">
                temp
              </div>
            </div>
            <div className="visibility">
              <div className="visibility-icon">
                <span class="material-symbols-outlined">
                  visibility
                </span>
                <h5 className='visibility-name'>visibility</h5>
              </div>
              <div className="wind-data">
                temp
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-content">

      </div>
    </div>
  )
}

export default Dashboard
