import React,{useState} from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Editor from "./Editor";







const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/editor" element={<Editor></Editor>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
