import React , {useState , useEffect} from "react";
import Number from "./Number";





const Count = () => {

    const  [ms , SetMs] = useState(0);
    const [decimal , SetDecimal] = useState(0);
    const [hour , SetHour ]  = useState(0);
    const [day , setDay] = useState(0);
   
   useEffect(() => {
        const interval = setInterval(()=> {
           SetMs((prevMs => {
               if (prevMs === 9){
                   SetDecimal((prevDecimal) => prevDecimal + 1);
                   return 0;
               } else  {
                   return prevMs + 1;
               }
           }))

           SetDecimal ((prevDec => {
            if (prevDec === 9){
                SetHour((prevHour) => prevHour + 1);
                return 0;
            } else {
                return prevDec;
            }
           }))
           
            
        }, 1000);
        return () => clearInterval(interval);
   },[]);


    return (
        <>
        <div className="container-fluid flex h-32 bg-black w-screen justify-center gap-5">
            <Number/>
            <Number/>
            <Number value = {day}/>
            <Number value = {hour}/>
            <Number value = {decimal}/>
            <Number value = {ms}/>
        </div>
        </>
    )
}






export default Count;