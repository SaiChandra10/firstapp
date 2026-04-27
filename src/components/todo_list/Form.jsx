import React, {useState} from "react";

function Form(props){
        const [inputText,setInputText] = useState();
        function handleInputChange(event){
            setInputText(event.target.value);
        }

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange}/>
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText("");
        }} >
          <span>Add</span>
        </button>
        </div>
    )
}

export default Form;