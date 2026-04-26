import React from "react";
import './Keeper-1.css'
const year = new Date().getFullYear();

function KeeperFooter(){
    return (
        <footer><p>Copyright @ {year}</p></footer>
    )
}

export default KeeperFooter;