
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";

import Navbar from './component/Navigation';
import Header from './component/Header';
import Weathercard from './component/Weathercard';
import Forecast from './component/Forecast';

const API_KEY = `72383fbe72fdd6b1ce5d1f696c8dd95a`;

function App() {

  const [city, setCity] = useState("");
  
  const [forecast, setForecast] = useState([]);
  
  const [latitude, setLatitude] = useState(Number);
  const [longitude, setLongitude] = useState(Number);
  const [sunrise, setSunrise] = useState(Number);
  const [sunset, setSunset] = useState(Number);

  function handleChangeInput(e) {
    console.log("changed");
    setCity(e.target.value);
  }

  function handleSearch() {
    console.log("ready to earch");
    getWeatherDetails(city);
  }

  const getWeatherDetails = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`
       
      )
      .then((wetherdata) => {
        console.log(wetherdata.data);
        setLatitude(wetherdata.data.city.coord.lat);
        setLongitude(wetherdata.data.city.coord.lon);
        setSunrise(wetherdata.data.city.sunrise);
        setSunset(wetherdata.data.city.sunset);

        setForecast(wetherdata.data.list);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="App">
      <Navbar/>
      <Header
      city={city}
        latitude={latitude}
        longitude={longitude}
        handleChangeInput={handleChangeInput}
        handleSearch={handleSearch}/>
        <div className="container">
      <Weathercard/>
      <Forecast
       forecast={forecast} 
        sunrise={sunrise}
        sunset={sunset}/></div>
    </div>
  );
}

export default App;
