import React from "react";
import "./Button.css";
import axios from "axios";

export default function Button({ text, func }) {
  return (
    <button className="submitButton" onClick={func}>
      {text}
    </button>
  );
}
