import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

import Button from "../../components/Button/Button";
import TextBox from "../../components/TextBox/TextBox";
import { Pick, PickList } from "../../components/PickList/PickList";

export default function Main() {
  const [likeList, setLikeList] = useState([]);
  const [dislikeList, setDislikeList] = useState([]);
  const [a, setA] = useState(1);

  const setLike = (name, type) => {
    // 0이면 추가, 1이면 삭제
    if (type === 0) setLikeList([...likeList, name]);
    else setLikeList(likeList.filter((v) => v !== name));
  };

  const setDislike = (name, type) => {
    if (type === 0) setDislikeList([...dislikeList, name]);
    else setDislikeList(dislikeList.filter((v) => v !== name));
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
                color={"blue"}
                placeholder={"키워드를 작성하고 Enter를 누르세요! 예) 김치"}
                func={setLike}
              />
              <PickList name="like" list={likeList} func={setLike} />
              <TextBox
                text="불호"
                color={"red"}
                placeholder={"키워드를 작성하고 Enter를 누르세요! 예) 탕"}
                func={setDislike}
              />
              <PickList name="dislike" list={dislikeList} func={setDislike} />
            </tbody>
          </table>
          <Button text="뭐 먹지?" />
        </div>
        {/* <Link to="/">main</Link>
        <Link to="/result">result</Link> */}
      </div>
    </div>
  );
}
