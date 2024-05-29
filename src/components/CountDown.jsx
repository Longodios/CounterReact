import React , {useState , useEffect} from "react";
import PropTypes from 'prop-types';


const CountDown = ({valueCountDown}) => {

    
    const [count , SetCount] = useState(valueCountDown);
    

    useEffect(() => {
            console.log("Estoy dentro del Count");
        const timeout = setTimeout(() => {
            SetCount((prevCount) => {
                console.log(prevCount);
                if( prevCount === 0){
                    return valueCountDown;
            } else {
                return prevCount - 1;
            }

            
            })
        },1000)

        return () => clearTimeout(timeout);
    
    })

    return(
        <p>Hola este es tu tiempo elegido : {count}</p>
    )


}



export default CountDown;


CountDown.propTypes = {
    valueCountDown: PropTypes.number
}