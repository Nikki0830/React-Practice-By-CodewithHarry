import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here!");
  // setText("xyz");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summmary</h1>
        <p>
          {text.split(" ").length} words {text.length} charachers
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
