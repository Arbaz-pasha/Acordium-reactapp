import React from "react";
import './index.css'

const Images=(probs)=>{
    return(
        <img className="card-img-top" src={probs.src} alt="Card image"/>
    )
}

export default Images