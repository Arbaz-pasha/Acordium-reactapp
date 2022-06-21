import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Acord from "./Acord";
import { questions } from "./Api";
import './index.css'


const App=(probs)=>{


    const [data,setData]=useState(questions);

    return(
        <>
        <div className="main-div">
        <h1 className="main-heading text-capitalize text-center mb-4">welcome to react-Bootstrap</h1>
    
        {data.map((curEle) =>{
        return <Acord key={curEle.id}{...curEle}/>;
        })
        }
        </div>
    </>
    );
}

export default App