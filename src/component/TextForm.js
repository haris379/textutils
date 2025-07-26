import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You clicked handleUpClick " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   text = "Hello"; wrong way to change the state
  //   setText("New Text"); correct way to change the state
  return (
    <>
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

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </>
  );
}
