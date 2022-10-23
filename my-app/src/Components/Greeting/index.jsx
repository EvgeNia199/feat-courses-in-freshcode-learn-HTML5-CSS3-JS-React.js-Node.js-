import React from "react";

function Greeting(props){
    return(
        <>
            <p>Greeting Component</p>
            <p>Hello, {props.userName} {props.userSurname}!!!</p>
        </>
    );
}

export default Greeting;