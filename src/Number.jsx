import React , {useState , useEffect} from "react";
import PropTypes from 'prop-types';




const Number = ({value}) => {
     //Inicializamos la variable
   

   
    return (
       <div className="border-4 text-center w-20 flex justify-center ">
        <span className="font-bold mt-10 text-5xl text-white" >{value}</span>
       
       </div>
    )
}

Number.propTypes = {
   value: PropTypes.number
}

    







export default Number;