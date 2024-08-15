import { useState } from 'react'
import './App.css'

function App() {
  const [langs, setLangs] = useState([
    {name: 'PHP', votes: 0},
    {name: 'Python', votes: 0},
    {name: 'Javascript', votes: 0},
    {name: 'Java', votes: 0},
  ]);

  const theVote = (i) => {
    const newLang = [...langs]
    newLang[i].votes++
    setLangs(newLang)
  }

  return (
    <>
      <h1>Vote Your Language!</h1>
      {langs.map((lang, indx) => {
        return (
          <div key={lang.name}>
            <div className='langOpts'>
            {lang.name} {lang.votes}
            <button className='mybutton' onClick={() =>theVote(indx)}>Vote</button>
            </div>
          </div>
        );
       })};
    </>
  );
};
export default App;

