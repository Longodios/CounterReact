import React from "react";



const ButtonStop = ({func}) => {

    return ( 
        <div className="my-7">
        <button onClick={func}className = "bg-white h-16 w-16 rounded">Stop</button>
        </div>
    )
}




export default ButtonStop;