import React,{useState} from "react";

function UserState3(){
    const[name, setName] = useState("Indus University");
    const[textColor, setcolor] = useState("Red");
    const[hideText, setHide] = useState("React JS Hooks");
    const[buttonText, setButtonText] = useState("Show");

    function showHide(){
        if(buttonText =="Hide"){
            setButtonText("Show");
            setHide("")
        }else{
            setButtonText("Hide");
            setHide("React JS Hooks")
        }
    }
    
    function changeColor(){
        if(textColor == "Red"){
            setcolor("Blue")
        }else{
            setcolor("Red")
        }
    }
    
    function changeName(){
        if(name === "Indus University"){
            setName("Welcome Students")
        }else{
            setName("Indus University")
        }
    }

    return(
        <div>
            <button onClick={changeName}>Change Text</button>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={showHide}>{buttonText}</button>

            <h1 style={{color:textColor}}>{name}</h1>
            <h2>{hideText}</h2>
        </div>
    )
}

export default UserState3;