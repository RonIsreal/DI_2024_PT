import { useState } from 'react'
import './App.css'
import Car from './components/Car'
import {Button, KeyDown, SetToggle} from './components/Events'
import Phone from './components/Phone'
import Color from './components/Color'

const carinfo = {
  name: "Ford",
  model: "Mustang"
};


function App() {

  return (
    <>
      <div>
        <Button/>
      </div>
      <div className="App">
      {/* <Events/> */}
      <Car car={carinfo} />
      <KeyDown />
      <SetToggle />
    </div>
    <div>
      <Phone />
    </div>
    <div>
      <Color />
    </div>
    </>
  )
}

export default App
