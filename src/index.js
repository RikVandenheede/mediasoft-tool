import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//// PAGES ////
import { Dashboard } from "./pages/Dashboard";
import { Audience } from "./pages/Audience";
import { Acquisition } from "./pages/Acquisition";

//// STYLE ////
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route exact path="/audience" element={<Audience />} />

        <Route exact path="/acquisition" element={<Acquisition />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
