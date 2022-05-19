import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Components/Routes/Router";
import Navbar from "./Components/Navbar/Navbar";
import OffersBar from "./Components/OffersBar/OffersBar";

function App() {
  return (
    <div className="App">
      <OffersBar />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
