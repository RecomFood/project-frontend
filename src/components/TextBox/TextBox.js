import React from "react";
import "./TextBox.css";

export default function TextBox({ text, color, placeholder, func }) {
  const add = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing === false) {
        const value = e.target.value;

        if (value === "" || value === undefined) {
          alert("값을 입력해주세요!");
          return;
        }

        func(value, 0);
      }
    }
  };

  return (
    <tr className="TextBox">
      <td>
        <p className={color}>{text}</p>
      </td>
      <td>
        <input
          className={color}
          enterkeyhint="search"
          type="text"
          placeholder={placeholder}
          onKeyDown={add}
        ></input>
      </td>
    </tr>
  );
}
