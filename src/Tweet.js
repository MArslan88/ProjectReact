import React from 'react';
import './App.css'

// First method with the help of PROPS----------------------------
// function Tweet(props){
//     return(
//         <div className="tweet">
//             <h3>{props.name}</h3>
//             <p>{props.message}</p>
//             <h3>{props.like}</h3>
//         </div>
//     );
// }

// Second method with the help of peremeters----------------------------

function Tweet({name,message,like}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{like}</h3>
        </div>
    );
}

export default Tweet;