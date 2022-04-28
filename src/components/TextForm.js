import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newtext2 = text.toLowerCase();
    setText(newtext2);
  };

  const handleClear = () => {
    // console.log("Uppercase was clicked");
    let newtext3 = "";
    setText(newtext3);
  };

  const handleCopy = () => {
    console.log("Uppercase was clicked");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    // console.log("Uppercase was clicked");
    let newtext4 = text.split(/[ ]+/);
    setText(newtext4.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here!");
  // setText("xyz");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary ms-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-warning mx-2" onClick={handleClear}>
          Clear text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summmary</h2>
        <p>
          {text.split(" ").length} words {text.length} charachers
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here!"}</p>
      </div>
    </>
  );
};

export default TextForm;
