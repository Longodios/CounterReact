import React from "react";



const ButtonReset = ({func}) => {

    return ( 
        <div className="my-7">
        <button onClick={func}className = "bg-white h-16 w-16 rounded">Reset</button>
        </div>
    )
}




export default ButtonReset;