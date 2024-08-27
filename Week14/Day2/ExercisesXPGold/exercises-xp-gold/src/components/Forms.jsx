import React, { useState } from 'react';

function Forms() {
    const [userInput, setUserInput] = useState("");
    const [displayedName, setDisplayedName] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission behavior
            setDisplayedName(userInput);
            setUserInput(""); 
        }
    };

    return (
        <div>
            <h1>Hello {displayedName}</h1>
            <h3>Enter your name:</h3>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </form>
        </div>
    );
}

export default Forms;

