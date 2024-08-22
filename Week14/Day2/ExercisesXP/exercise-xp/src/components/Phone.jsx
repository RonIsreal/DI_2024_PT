import React, { useState } from 'react';

function Phone() {
    
    const [brand, setBrand] = useState('Samsung');
    const [model, setModel] = useState('Galaxy S24+');
    const [color, setColor] = useState('Black');
    const [year, setYear] = useState(2024);

    const changeColor = () => {
        setColor("Blue");
    }
    
    return (
        <div>
      <h1>My phone is a {brand}</h1>
      <p>It's a {color} {model} from {year}</p>
      <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }


  
  export default Phone;

