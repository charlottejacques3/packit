import React, { useState } from 'react';
import './styles/WeatherCard.css'

//images
import sunny_icon from './images/sunny_icon.png'

function WeatherCard({day, temp}) {
    return (
        <div className="weather-card">
            <img src={sunny_icon}/>
            <p><strong>Saturday</strong></p>
            <p>4°C</p>
        </div>
    );
}

export default WeatherCard;