import React from 'react';
import Card from "react-bootstrap/Card";


function Forecast({forecast,
  sunrise,
  sunset}) {
    return forecast.map((data) => {
      return (
        <div className="forecast">
        <Card>
          <Card.Body>
            <Card.Text>{data.dt_txt}</Card.Text>
  
            <Card.Text>{data.weather[0].main}</Card.Text>
            <Card.Text>{data.main.temp_max}</Card.Text>
            <Card.Text>{data.main.temp_min}</Card.Text>
            <Card.Text>{data.main.humidity}</Card.Text>
            <Card.Text>{sunrise}</Card.Text>
            <Card.Text>{sunset}</Card.Text>
          </Card.Body>
        </Card></div>
      );
    });
  }
  
export default Forecast