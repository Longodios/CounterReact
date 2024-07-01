import React, { useState, useEffect } from "react";
import Number from "./Number";
import Clock from "./Clock";
import ButtonReset from "./ButtonReset";
import ButtonStop from "./ButtonStop";
import ButtonStart
 from "./ButtonStart";




const Count = () => {
  console.log("Componente");
  const [isRunning, setIsRunning] = useState(false)
  const [ms, SetMs] = useState(0);
  const [seconds, Setseconds] = useState(0);
  const [hour, SetHour] = useState(0);
  const [day, SetDay] = useState(0);
  const [year, SetYear] = useState(0);
  const [lunarYear , SetLunar] = useState(0);

  const funcReset  = () => {
    
      SetMs(0);
      Setseconds(0);
      SetHour(0);
      SetDay(0);
      SetYear(0)
      SetLunar(0);
    
    alert("Contador reiniciado!")
  }

  const funcStopCount = () => {
     alert("Estoy dentro del boton de stop")

    setIsRunning(false);
  }

  const funcStartCount = () => {
    setIsRunning(true);
    alert("Empieza la cuenta!!")
    console.log(isRunning)
  }

 
//ESTO FUNCIONA

  useEffect(() => {
    if (isRunning) {
    console.log("UseEffect");
    const interval = setInterval(() => {
      console.log("intervalo");
      SetMs((prevMs) => {
        if (prevMs === 60) {
          Setseconds((prevDec) => {
            if (prevDec === 60) {
              console.log("Añado HORA");
              SetHour((prevHour) => {
                if (prevHour === 24 ) {
                  console.log("Añado DIA");
                  SetDay((prevDay) => {
                    if( prevDay === 31 ){
                        console.log("Añado MES");
                        SetYear((prevYear) => {
                            if( prevYear === 12){
                                console.log("Añado AÑO")
                                SetLunar((prevLunarYear) => prevLunarYear + 1)
                               return 0;
                            }
                         return prevYear + 1;   
                        })
                        return 0;
                    }
                    return prevDay + 1;
                  } );
                  return 0;
                }
                return prevHour + 1;
              });

              return 0;
            }

            return prevDec + 1;
          });
          return 0;
        } else {
          return prevMs + 1;
        }
      
      });
    }, 1000);
    return () => clearInterval(interval);
  }}, [isRunning]);

 


  return (
    <>
      <div className="container-fluid flex h-32 bg-black w-screen justify-center gap-5">
        <Clock/>
        <Number value = {lunarYear}/>
        <Number value= {year}/>
        <Number value={day} />
        <Number value={hour} />
        <Number value={seconds} />
        <Number value={ms} />
        <ButtonReset func={funcReset}/>
        <ButtonStop func={funcStopCount}/>
        <ButtonStart func={funcStartCount}/>
      </div>
    </>
  );

};





export default Count;
