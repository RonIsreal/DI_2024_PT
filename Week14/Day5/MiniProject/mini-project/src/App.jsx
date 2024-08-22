import { useState } from 'react'
import Quotes from './components/Quotes.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         {
        Quotes.map((item) => {
          return <User key={item.id} info={item} />
        })}
            
      </div>
    </>
  )
}

export default App
