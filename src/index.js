import React from "react";
import  ReactDOM from "react-dom";
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Webdata from "./Webdata";
import Web from "./Web";

function ncards(val){
return(
    <Web 
      src={val.src}
    />
)
}

ReactDOM.render(

    <>   
    <div className="main">
    <App/>
    </div>
    <br/>
    <br/>
    <h1 className="heading text-center text-capitalize alert-info">Welcome to Bootstrap site</h1>
    <br/><br/>
    <div className="container">
   
    {Webdata.map(ncards)}
    </div>
   
     </>,

document.getElementById('root')
);