import { useState } from 'react'
import Users from './components/Users.jsx'
// import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
     <div>
         {
        users.map((item) => {
          return <div key={item.id}
        })}
            
      </div>
    </>
  )
}

export default App
