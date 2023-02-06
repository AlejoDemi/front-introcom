import React from 'react';
import "./Home.css";
import {HumidityChart} from "../Charts/HumidityChart";
import {TemperatureChart} from "../Charts/TemperatureChart";




const Home = () => {

    
    return (
        <div className={"home-container"} >
            <HumidityChart></HumidityChart>
            <TemperatureChart></TemperatureChart>
        </div>
    );
};

export default Home;
