import React, { useEffect } from "react";
import { BrowserRouter as BRouter } from "react-router-dom";

import "./App.css";
import { Router } from "./Router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BRouter>
        <Router />
        <Footer />
      </BRouter>
    </div>
  );
}

export default App;
