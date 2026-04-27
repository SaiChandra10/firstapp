import React, {  useState } from "react";

function KeeperNotesCreate(props) {
    const [title,setTitle] = useState();
    const [content,setContent] = useState();

    function handleTitle(event){
        setTitle(event.target.value);
    }
    function handleContent(event){
        setContent(event.target.value);
    }
    function handleClick(event){
        props.onAdd(title,content); 
        event.preventDefault();
        setContent("")
        setTitle("");
    }

  return (
    <div>
      <form>
        <input onChange={handleTitle} name="title" placeholder="Title" value={title} />
        <textarea onChange={handleContent} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default KeeperNotesCreate;