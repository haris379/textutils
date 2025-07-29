import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You clicked handleUpClick " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    // console.log("You clicked handlelowClick " + text);
    let newTextLower = text.toLowerCase();
    setText(newTextLower);
  };
  const clearClick = () => {
    // console.log("You clicked handlelowClick " + text);
    let newTextClear = " ";
    setText(newTextClear);
  };
  const copyText = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  };

  const [text, setText] = useState("");
  //   text = "Hello"; wrong way to change the state
  //   setText("New Text"); correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={clearClick}>
          Clear Text{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={extraSpace}>
          Remove Extra Spaces
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          {" "}
          🔊 Speak{" "}
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
