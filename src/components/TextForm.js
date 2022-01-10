import React, { useState } from 'react';



export default function TextForm(props) {
    
    const [text, setText] = useState('Enter text here');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
        
    }

    const handleDnClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCopyClick = ()=>{
    
        navigator.clipboard.writeText(text);
        
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
           
    }

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" style={{backgroundColor : props.mode==='dark'?'grey':'white'}} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDnClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>CopyText</button>
        </div>
        <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.length} Words</p>
            <p>{0.008*text.length} Reading Time</p>
        </div>
        </>
    )
}
