import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Images from './Images'

const Web=(probs)=>{

    return(
        <>
        <div className="card">
        <Images src={probs.src}/>
        <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">See Profile</a>
        </div>
        </div>
        </>
    )
}

export default Web
