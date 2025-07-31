import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!" , "success");
  };

  const handlelowClick = () => {
    let newTextLower = text.toLowerCase();
    setText(newTextLower);
    props.showAlert("Converted to lowercase!" , "success");
  };

  const clearClick = () => {
    let newTextClear = " ";
    setText(newTextClear);
    props.showAlert("Text has been clear" , "success");
  };

  const copyText = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copy to clipboard" , "success");
  };

  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed" , "success");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  };

  // text-${props.mode === 'dark'? 'white': '#042743'}
  const [text, setText] = useState("");
  //   text = "Hello"; wrong way to change the state
  //   setText("New Text"); correct way to change the state
  return (
    <>
      <div className="container" style={{ color : props.mode === 'dark'? 'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea  className="form-control" value={text}  onChange={handleOnchange}  
          style={{ backgroundColor : props.mode === 'dark'? 'grey': 'white' , 
          color :  props.mode === 'dark'? 'white': '#042743' }} 
           id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear Text{" "}</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={extraSpace}>Remove Extra Spaces</button>
        <button  type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" >{" "}🔊 Speak{" "}</button>
      </div>
      <div className="container my-3" style={{ color : props.mode === 'dark'? 'white': '#042743'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and , {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox above to preview it here."}</p>
      </div>
    </>
  );
}
