import "./index.css";
import React from "react";
// import MyComponent from "./component";
import { Link } from "react-router-dom";


function HEADER() {
    return <div className="container">
        <div className="nav">React 練習專案</div>
        <div className="welcome">Welcome　My　Page</div>
        <div className="buttoncontainer">
            <button className="start"><Link to="/component" className="link">Click to Start</Link></button>
        </div>
    </div>
}

export default HEADER