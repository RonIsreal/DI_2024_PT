import { useState, useEffect } from "react";

function Voting() {
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
        <h2>VOTE</h2>
        {langs.map(lang.indx) => {
            return (
                <div key={lang.name}>
                    {lang.name} {lang.votes}
                    <button onClick={() =>theVote(indx)}>Vote</button>
                </div>
            );
        }}
    </>
  );
};
export default Voting;