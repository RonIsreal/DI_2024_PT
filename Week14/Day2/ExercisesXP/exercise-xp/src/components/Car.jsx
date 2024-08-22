import React from 'react';
import { useState } from 'react';
import Garage from './Garage';


function Car({ car }) {
  // Initialize the state with a default color
  const [color, setColor] = useState('black');

  return (
    <header>
      This car is a {color} {car.name} {car.model}.
      <Garage size='small' />
    </header>
  );
}

export default Car;