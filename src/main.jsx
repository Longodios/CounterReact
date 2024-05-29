import React from   'react'
import ReactDOM from 'react-dom/client'
import Count from "./components/Count";
import Clock from "./components/Clock";
import CountDown  from './components/CountDown';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    
    <Count/>
    <CountDown valueCountDown={5}/>
    
    </>
)
