import React, { useState, useEffect } from "react";
import Number from "./Number";

const Count = () => {
  console.log("Componente");

  const [ms, SetMs] = useState(0);
  const [decimal, SetDecimal] = useState(0);
  const [hour, SetHour] = useState(0);
  const [day, SetDay] = useState(0);
  const [month, SetMonth] = useState(0);
  //ESTO FUNCIONA

  useEffect(() => {
    console.log("UseEffect");
    const interval = setInterval(() => {
      console.log("intervalo");
      SetMs((prevMs) => {
        if (prevMs === 16) {
          SetDecimal((prevDec) => {
            if (prevDec === 16) {
              console.log("Añado hora");
              SetHour((prevHour) => {
                if (prevHour ===16) {
                  console.log("Añado día");
                  SetDay((prevDay) => {
                    if( prevDay === 16 ){
                        console.log("Añado mes");
                        SetMonth((prevMonth) => prevMonth + 1)
                        return 0;
                    }
                    return prevDay + 8;
                  } );
                  return 0;
                }
                return prevHour + 8;
              });

              return 0;
            }

            return prevDec + 8;
          });
          return 0;
        } else {
          return prevMs + 8;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container-fluid flex h-32 bg-black w-screen justify-center gap-5">
        <Number />
        <Number value= {month}/>
        <Number value={day} />
        <Number value={hour} />
        <Number value={decimal} />
        <Number value={ms} />
      </div>
    </>
  );
};

export default Count;
