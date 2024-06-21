import React from "react";



const ButtonStart = ({func}) => {

    return ( 
        <div className="my-7">
        <button onClick={func}className = "bg-white h-16 w-16 rounded">Start</button>
        </div>
    )
}




export default ButtonStart;