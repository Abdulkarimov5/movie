import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
const [light, setLight] = useState('red');
const [isBlinking, setIsBlinking] = useState(false);

useEffect(() => {
    let interval;
    if (light === 'red') {
    interval = setTimeout(() => setLight('red-yellow'), 4000);
    } else if (light === 'red-yellow') {
    interval = setTimeout(() => setLight('green'), 3000);
    } else if (light === 'green') {
    setIsBlinking(true);
    interval = setTimeout(() => setLight('yellow'), 3000);
    } else if (light === 'yellow') {
    setIsBlinking(false);
    interval = setTimeout(() => setLight('red'), 4000);
    }
    return () => clearTimeout(interval);
}, [light]);

return (
    <div className="traffic-light">
    <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
    <div className={`light yellow ${light === 'red-yellow' || light === 'yellow' ? 'active' : ''}`}></div>
    <div className={`light green ${isBlinking && light === 'green' ? 'blinking' : light === 'green' ? 'active' : ''}`}></div>
    </div>
);
};

export default TrafficLight;
