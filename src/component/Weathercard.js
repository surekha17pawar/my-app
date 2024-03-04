import React from 'react';
import Card from 'react-bootstrap/Card';

function Weathercard() {
  return (<>
    <div><Card style={{ width: '12rem' }}>
      <Card.Body>
        
        <Card.Title className="mb-2 text-muted">weather data</Card.Title>
        <Card.Title className="mb-2 text-muted">weather type</Card.Title>
        
        <Card.Text>
          High temprature
        </Card.Text>
        <Card.Text>
          low temprature
        </Card.Text>
        <Card.Text>
          Humidity
        </Card.Text>
        <Card.Text>
          sunrise time
        </Card.Text>
        <Card.Text>
          sunset time 
        </Card.Text>
        

      </Card.Body>
    </Card></div>
    </>
  )
}

export default Weathercard;