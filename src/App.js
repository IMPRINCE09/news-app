import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Sport from "./components/Pages/Sport";
import Enter from "./components/Pages/Enter";
import Poltics from "./components/Pages/Poltics";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sports" element={<Sport />} />
          <Route path="/Entertainment" element={<Enter />} />
          <Route path="/Poltics" element={<Poltics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
