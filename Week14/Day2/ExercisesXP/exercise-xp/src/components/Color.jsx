import React, { useEffect, useState } from "react";

function Color() {
    
    const [favoriteColor, setFavoriteColor] = useState('Black');

    useEffect(() => {
        setFavoriteColor("Red");
        alert("useEffect reached");
    },[]) //Adding the empty array prevents the useEffect from getting into an infinite loop. READ THE ERROR MESSAGES!

    const changeColor = () => {
        setFavoriteColor("Blue");
    }

    return (
        <div>
      <header>My Favorite color is {favoriteColor}</header>
      <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }


  
  export default Color;