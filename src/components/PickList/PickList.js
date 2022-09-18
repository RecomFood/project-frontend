import React from "react";
import "./PickList.css";

export default function PickList({ name }) {
  return (
    <tr>
      <td></td>
      <td className={name}>
        <div className="element">
          <p>김치</p>
          <div className="delete">x</div>
        </div>
        <div className="element">
          <p>김치</p>
          <div className="delete">x</div>
        </div>
        <div className="element">
          <p>김치</p>
          <div className="delete">x</div>
        </div>
      </td>
    </tr>
  );
}
