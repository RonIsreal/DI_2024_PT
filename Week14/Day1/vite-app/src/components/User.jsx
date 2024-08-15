import React from "react";
import './user.css'



const User = (props) => {
    console.log(props.info)
    const {id, name, username, email} = props.info;
  
    return (
        <React.Fragment>
            <div className="userstyle">
                <h3>Hello {name}!</h3>
                <h5>Email: {email}</h5>
                <h5>Username: {username}</h5>
                <img src={`https://robohash.org/${id}?size=150x150`}/>
                <p>----------------------------------------------</p>
            </div> 
        </React.Fragment> //react.fragment is like a fake div. making the page lighter instead of having several divs 
    )
}
export default User;