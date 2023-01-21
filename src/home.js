import "./index.css";
import React from "react";
import { Link } from "react-router-dom";


function HOME() {
    return <div className="container">
        <div className="nav">React 練習專案</div>
        <div className="welcome">Welcome　My　Page</div>
        <div className="buttoncontainer">
            <button className="start"><Link to={"/list"} className="link">Click to Start</Link></button>
        </div>
    </div>
}

export default HOME