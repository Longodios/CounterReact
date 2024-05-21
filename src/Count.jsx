import React from "react";
import Number from "./Number";





const Count = ({ms}) => {
    return (
        <>
        <div className="container-fluid flex h-32 bg-black w-screen justify-center gap-5">
            <Number ms = {ms}/>
            <Number ms = {ms}/>
            <Number/>
            <Number/>
            <Number/>
            <Number/>
        </div>
        </>
    )
}






export default Count;