import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

function Todo() {

        const [listItem, setListItem] = useState([]);
        function handleClick(inputText){
            setListItem((preItem) => [...preItem,inputText]);
            //setInputText("");
        }


        function deleteItem(id) {
            setListItem(prevItems => {
                return prevItems.filter((item, index) => {
                return index !== id;
                });
            });
        }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Form onAdd = {handleClick}/>
      </div>
      <div>
        <ul>
          {listItem.map((item,index) => <List key={index} id={index} onChecked={deleteItem} item={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
