import React, {useState} from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url=`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=f7f660bba8a1b7f2da57685f73aad4eb`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Gafsa</p>
          </div>
          <div className="temp">
            <h1>27°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            <p className="bold">29°C</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p className="bold">15%</p>
          </div>
          <div className="wind">
            <p>Wind Speed</p>
            <p className="bold">12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
