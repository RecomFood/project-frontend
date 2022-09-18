import React from "react";
import "./Button.css";
import axios from "axios";

/*
 * Axios
 */

// useEffect(() => {
//   axiosTest();
// });
// const axiosTest = () => {
//   axios
//     .get("http://54.151.0.147:5050/")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

export default function Button({ text, func }) {
  return (
    <button className="submitButton" onClick={func}>
      {text}
    </button>
  );
}
