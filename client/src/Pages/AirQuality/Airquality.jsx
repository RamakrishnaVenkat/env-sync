import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import "./AirQuality.css";
import Bargraph from './Bargraph';
import { data } from './data';

function Airquality() {
  // Define state variables to store the values of each input
  const [averageTemperature, setAverageTemperature] = useState(0);
  const [maxTemperature, setMaxTemperature] = useState(0);
  const [minTemperature, setMinTemperature] = useState(0);
  const [averageHumidity, setAverageHumidity] = useState(0);
  const [totalRainfall, setTotalRainfall] = useState(0);
  const [averageVisibility, setAverageVisibility] = useState(0);
  const [averageWindSpeed, setAverageWindSpeed] = useState(0);
  const [maxWindSpeed, setMaxWindSpeed] = useState(0);

  return (
    <div>
      {/* <Navbar /> */}
      <div className='aqi-box-container'>
        <div className='aqi-container' style={{backgroundImage:`URL(https://www.envirotech-online.com/assets/file_store/pr_files/57953/thumbnails/images/391w_clouds-gb504287d4_1280.jpg)`}}>
          <div className='aqi-topic'>
            <h3>Current Air Quality Index</h3>
          </div>
          <div className='current-aqi'>
            102
          </div>
          <div className='city-name'>
            City: Chennai
          </div>
          <div className='city-form'>
            <form action="">
              <input className='city-input' type="text" placeholder='Enter city for AQI' />
            </form>
          </div>
        </div>
        <Bargraph data={data} />
      </div>
      <div className='prediction-box-container'>
          <div className='prediction-input-container'>
          <h2>Try out our ML prediction model to predict AQIs</h2>
            <table className='predictive-input-table'>
              <tr>
                <td>Average Temperature &deg;C</td>
                <td><input type="range" min="0" max="50" step="2" value={averageTemperature} onChange={(e) => setAverageTemperature(e.target.value)} /> {averageTemperature}</td>
              </tr> 
              <tr>
                <td>Maximum Temperature &deg;C</td>
                <td><input type="range" min="0" max="50" step="2" value={maxTemperature} onChange={(e) => setMaxTemperature(e.target.value)} /> {maxTemperature}</td>
              </tr>
              <tr>
                <td>Minimum Temperature &deg;C</td>
                <td><input type="range" min="0" max="25" step="2" value={minTemperature} onChange={(e) => setMinTemperature(e.target.value)} /> {minTemperature}</td>
              </tr>
              <tr>  
                <td>Average Humidity</td>
                <td><input type="range" min="0" max="12" step="1" value={averageHumidity} onChange={(e) => setAverageHumidity(e.target.value)} /> {averageHumidity}</td>
              </tr>
              <tr>
                <td>Precipitation</td>
                <td><input type="range" min="0" max="50" step="2" value={totalRainfall} onChange={(e) => setTotalRainfall(e.target.value)} /> {totalRainfall}</td>
              </tr>
              <tr>
                <td>Visibility</td>
                <td> <input type="range" min="0" max="10" step="1" value={averageVisibility} onChange={(e) => setAverageVisibility(e.target.value)} /> {averageVisibility}</td>
              </tr>
              <tr>
                <td>Average WindSpeed</td>
                <td><input type="range" min="0" max="10" step="1" value={averageWindSpeed} onChange={(e) => setAverageWindSpeed(e.target.value)} /> {averageWindSpeed}</td>
              </tr>
              <tr>
                <td>Maximum Wind Speed</td>
                <td><input type="range" min="-0" max="15" step="1" value={maxWindSpeed} onChange={(e) => setMaxWindSpeed(e.target.value)} /> {maxWindSpeed}</td>
              </tr>
            </table>
            <button className='predict-button'>
              Predict
            </button>
          </div>
          <div className='prediction-output-container'>
            <div className='predicted-aqi'>
              <p className='predicted-aqi-announcer'>
                The predicted Air Quality Index is
              </p>
              <div className='aqi-number'>
                102
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Airquality;
