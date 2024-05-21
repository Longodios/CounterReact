import React , {useState , useEffect} from "react";
import PropTypes from 'prop-types';




const Number = () => {
     //Inicializamos la variable
     const  [ms , SetMs] = useState(0);
    
    useEffect(() => {
         const interval = setInterval(()=> {
             SetMs(prevMs => prevMs + 1);
         }, 1000);
         return () => clearInterval(interval);
    },[]);

   
    return (
       <div className="border-4 text-center w-20 flex justify-center ">
        <span className="font-bold mt-10 text-5xl text-white" >{ms}</span>
       
       </div>
    )
}

Number.propTypes = {
    ms : PropTypes.number
}

    







export default Number;