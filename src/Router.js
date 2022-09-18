import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main/Main";
import Result from "./pages/Result/Result";

export function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/result/" element={<Result />} />
      <Route exact path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
