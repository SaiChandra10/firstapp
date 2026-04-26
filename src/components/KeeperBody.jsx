import React from "react";
import './Keeper-1.css'
function KeeperBody(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default KeeperBody;