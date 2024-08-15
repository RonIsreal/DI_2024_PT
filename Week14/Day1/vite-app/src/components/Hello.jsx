import React from "react";

const Hello = (props) => {
    // const { name, subname } = props;
    return (
        <React.Fragment>
            <h3>Hello {props.username} | {props.email}</h3>
            
        </React.Fragment> //react.fragment is like a fake div. making the page lighter instead of having several divs 
    )
}
export default Hello;