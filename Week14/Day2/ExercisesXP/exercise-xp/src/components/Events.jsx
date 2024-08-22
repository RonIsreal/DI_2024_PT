import React, { useState } from 'react';

const Button = () => {
    // Whenever calling a function, use curly brackets
    const clickMe = () => alert("I was Clicked!");
    return (
        <button onClick={clickMe}>Click Me</button>
        
    );
  };

const KeyDown = () => {

    const[userInput, setUserInput] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`You wrote ${userInput}`);
        }
    }

    return (
        <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type something..."
        />
    );
}

const SetToggle = () => {
    
    const [isToggleOn, setIsToggleOn] = useState(true);

    // Example function to toggle the state
    const handleToggle = () => {
        setIsToggleOn(prevState => !prevState);
    };

    return (
        <div>
            <p>The toggle is {isToggleOn ? 'On' : 'Off'}</p>
            <button onClick={handleToggle}>
                {isToggleOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
};


export {Button, KeyDown, SetToggle};