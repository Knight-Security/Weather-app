import React from 'react'
import { useState } from 'react'
const Result = (props) => {
    const { data } = props
    return (
        <div className="main-result">
            <div >
                <div className="result-container">
                    <div className="result-city">
                        <h2 style={{ color: "#007AFF" }}> {data?.main?.temp} </h2>
                        <h3>{data?.name} </h3>
                    </div>
                    <div className="result-city-curret-icon">
                        <img
                            src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
                            alt="weather icon"
                        />
                    </div>
                    <div className="pin-button">
                        <button className="pin-button">
                            <span class="material-symbols-outlined">
                                keep
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="other-result-features">
                <div className="humidity">{data?.main?.humidity}</div>
                <div className="wind">{data?.wind?.speed}</div>
                <div className="max-temp">{data?.main?.temp_max}</div>
                <div className="min-temp">{data?.main?.temp_min}</div>
            </div>
        </div>
    )
}
export default Result

