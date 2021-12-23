import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const handleUpClick = () => {
    console.log("upper case clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleOnchange =(event)=>{
    console.log("onChange");
    setText(event.target.value);
  }
  return (
  <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text} onChange ={handleOnchange}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
      </div>
    </div>
    <div className = "container my-3">
      <h1>Your Text summary</h1>
      <p> {text.split(" ").length} words, {text.length} character</p>
    </div>
    </>
  );
}
