//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React, { useState } from "react";
import KeeperHeader from './KeeperHeader';
import KeeperFooter from './KeeperFooter';
import KeeperBody from './KeeperBody'
import KeeperNotesCreate from './KeeperNotesCreate'
import './Keeper-1.css';
//import notes from "./notes";



function Keeper(){
    const [notes,setNotes] = useState([]);
    function handleClick(title,content,event){
        setNotes((preNotes) => [...preNotes, {title:title,content:content}])
    }
    function handleDelete(id){
        console.log(id);
        setNotes(preNotes => preNotes.filter((item,index)=> index !== id));
    }
    return(
        <div> 
            <KeeperHeader />
            <KeeperNotesCreate onAdd={handleClick}/>
            {notes.map( (noteItem,index) => (
                         <KeeperBody
                            key = {index}
                            id = {index}
                            title = {noteItem.title}
                            content = {noteItem.content}
                            onDelete = {handleDelete}
                            />
                    ))}
            {/* <KeeperBody title = "This is the note title" content = "This is the note content"/> */}
            <KeeperFooter />
        </div>
        
    )
}

export default Keeper;