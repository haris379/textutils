import React, { useState } from "react";

export default function About(props) {

  // const [myStyle, setmyStyle] = useState({
  //   color: " black",
  //   backgroundColor: "white",
  // });


  let myStyle = {
    color : props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor : props.mode === 'dark' ? 'rgb( 36 74 104)' : 'white'
  }
 

  return (
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count or convert your text to lower case or convert to
              uppercase
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Textutils is a free character counter tool that provide instant
              character count & word count statistics for a given text.
              Textutils give the number of words and characters Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter works in any browser such as Chrome , Firefox
                , Internert Explorer , Safari , Opera.
                It suits to count
                character in facebook , blogs , books , excel document , essay
                document , pdf , etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
