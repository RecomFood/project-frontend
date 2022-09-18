import React from "react";
import "./TextBox.css";

export default function TextBox({ text, color, placeholder }) {
  return (
    <tr className="TextBox">
      <td>
        <p className={color}>{text}</p>
      </td>
      <td>
        <input className={color} type="text" placeholder={placeholder}></input>
      </td>
    </tr>
  );
}
