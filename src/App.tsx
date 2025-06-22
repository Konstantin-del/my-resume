import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
