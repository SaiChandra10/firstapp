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

import React, { useState, useEffect } from "react";
import KeeperHeader from './KeeperHeader';
import KeeperFooter from './KeeperFooter';
import KeeperBody from './KeeperBody'
import KeeperNotesCreate from './KeeperNotesCreate'
import './Keeper-1.css';
import { fetchNotes , addNotes, deleteNotes } from "./notes";


function Keeper(){
    const [notes,setNotes] = useState([]);
    
    useEffect(() => {
        const loadNotes = async () => {
            const data = await fetchNotes();
            setNotes(data);
        };
        loadNotes();
    }, []);
    
    function handleClick(title,content,event){
        //setNotes((preNotes) => [...preNotes, {id:preNotes.length + 1, title:title,content:content}])
        addNotes({title:title,content:content}).then(() => {
        fetchNotes().then(data => setNotes(data));
    });
    }
    function handleDelete(id){
        console.log(id);
        deleteNotes(id).then(() => {
            fetchNotes().then(data => setNotes(data));
        })
        //setNotes(preNotes => preNotes.filter((item)=> item.id !== id));
    }
    return(
        <div> 
            <KeeperHeader />
            <KeeperNotesCreate onAdd={handleClick}/>
            {console.log(notes,"from keeper")}
            {notes.map( (noteItem) => (
                         <KeeperBody
                            key = {noteItem.id}
                            id = {noteItem.id}
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