import React from 'react'
import User from './components/User'
import users from './users.json'
// import './App.css'

function App() {
  return (
    <>
      <div>
         {
        users.map((item) => {
          return <User key={item.id} info={item} />
        })}
            
      </div>
    </>
    )
}
export default App

