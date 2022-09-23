import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Main.css";

import TextBox from "../../components/TextBox/TextBox";
import { PickList } from "../../components/PickList/PickList";

export default function Main() {
  const [likeList, setLikeList] = useState([]);
  const [dislikeList, setDislikeList] = useState([]);

  const setLike = (name, type) => {
    // 0이면 추가, 1이면 삭제
    if (type === 0) setLikeList([...likeList, name]);
    else setLikeList(likeList.filter((v) => v !== name));
  };

  const setDislike = (name, type) => {
    if (type === 0) setDislikeList([...dislikeList, name]);
    else setDislikeList(dislikeList.filter((v) => v !== name));
  };

  async function getValue() {
    let response = await axios.post("http://54.151.0.147:5050/" + "getValue");
  }

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
          <Link className="submitButton" to="/result" onClick={getValue}>
            뭐 먹지?
          </Link>
        </div>
      </div>
    </div>
  );
}
