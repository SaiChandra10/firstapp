import React from "react";

function List(props){
    
    return (
        <li onClick={() => {props.onChecked(props.id)}}>{props.item}</li>
    )
}

export default List