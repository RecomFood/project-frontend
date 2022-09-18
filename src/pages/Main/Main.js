import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

import Button from "../../components/Button/Button";
import TextBox from "../../components/TextBox/TextBox";
import PickList from "../../components/PickList/PickList";

export default function Main() {
  const func = () => {
    console.log("Hi");
  };

  return (
    <div className="main">
      <div>
        <h1> 오늘 뭐 먹지? </h1>
        <div className="submitBox">
          <table className="inputTable">
            <tbody>
              <TextBox
                text="호"
                color={"yellow"}
                placeholder={"키워드를 작성하고 Enter를 누르세요! 예) 김치"}
              />
              <PickList name="like" />
              <TextBox
                text="불호"
                color={"red"}
                placeholder={"키워드를 작성하고 Enter를 누르세요! 예) 탕"}
              />
              <PickList name="dislike" />
            </tbody>
          </table>
          <Button text="뭐 먹지?" func={func} />
        </div>
        {/* <Link to="/">main</Link>
        <Link to="/result">result</Link> */}
      </div>
    </div>
  );
}
