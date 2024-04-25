import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.module.css";
import { HomePage } from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
