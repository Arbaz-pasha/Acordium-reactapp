import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const Acord =({question,answer})=>{

    const [show,setShow]=useState(false);
  
    return(
        <>   
        <div className="input">
        <button className="plus " onClick={()=>setShow(!show)}>{show?"➖" : "➕"}</button>
            <p>{question} </p>
        </div>
       {
            show &&  <p className="p mt-0">{answer} </p>
       }
        </>
    )
}

export default Acord