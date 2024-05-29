import React, { useState, useEffect } from "react";
import Number from "./Number";
import Clock from "./Clock";
import ButtonReset from "./ButtonReset";




const Count = () => {
  console.log("Componente");

  const [ms, SetMs] = useState(0);
  const [decimal, SetDecimal] = useState(0);
  const [hour, SetHour] = useState(0);
  const [day, SetDay] = useState(0);
  const [year, SetYear] = useState(0);
  const [lunarYear , SetLunar] = useState(0);

  const funcReset  = () => {
    if (ms > 1){
      SetMs(0);
      SetDecimal(0);
      SetHour(0);
      SetDay(0);
      SetYear(0)
      SetLunar(0);
    }
  }

 
//ESTO FUNCIONA

  useEffect(() => {
    console.log("UseEffect");
    const interval = setInterval(() => {
      console.log("intervalo");
      SetMs((prevMs) => {
        if (prevMs === 2) {
          SetDecimal((prevDec) => {
            if (prevDec === 2) {
              console.log("Añado HORA");
              SetHour((prevHour) => {
                if (prevHour ===2) {
                  console.log("Añado DIA");
                  SetDay((prevDay) => {
                    if( prevDay === 2 ){
                        console.log("Añado MES");
                        SetYear((prevYear) => {
                            if( prevYear === 2){
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
  }, []);

 


  return (
    <>
      <div className="container-fluid flex h-32 bg-black w-screen justify-center gap-5">
        <Clock/>
        <Number value = {lunarYear}/>
        <Number value= {year}/>
        <Number value={day} />
        <Number value={hour} />
        <Number value={decimal} />
        <Number value={ms} />
        <ButtonReset func={funcReset}/>
      </div>
    </>
  );

};





export default Count;
