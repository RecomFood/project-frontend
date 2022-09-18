import React from "react";
import "./PickList.css";

const Pick = ({ name, list, func }) => {
  const deleteList = (e) => {
    let element =
      e.target.className !== "element" ? e.target.parentElement : e.target;

    func(element.getElementsByTagName("p")[0].innerText, 1);
    console.log(list);
  };
  return (
    <div className="element" onClick={deleteList}>
      <p>{name}</p>
      <div className="delete">x</div>
    </div>
  );
};

const PickList = ({ name, list, func }) => {
  return (
    <tr>
      <td></td>
      <td className={name}>
        {list &&
          list.map((item) => <Pick name={item} list={list} func={func} />)}
      </td>
    </tr>
  );
};

export { Pick, PickList };
