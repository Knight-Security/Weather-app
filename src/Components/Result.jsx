import React from 'react'
import { useState } from 'react'
const Result = (props) => {
    const {data}=props
    return (
        <div>
            <div className="main-result">
                <div className="pin-button">
                    <button className="pin-button">Pin</button>
                </div>
                <div className="result-city">
                    <h2> {data?.temp} </h2>
                    <h3>{data?.name} </h3>
                </div>
                <div className="result-city-curret-temperature">
                    {data?.temp}
                </div>
            </div>
            <div className="other-result-features">
                <div className="humidity">{data?.main?.humidity}</div>
                <div className="wind">{data?.wind?.wind}</div>
                <div className="max-temp">{data?.main?.temp_max}</div>
                <div className="min-temp">{data?.main?.temp_min}</div>
            </div>
        </div>
    )
}
export default Result
