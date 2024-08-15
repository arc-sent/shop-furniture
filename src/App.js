import React, { useState, useContext } from "react";
import Header from "./components/Header";
import { FurnitureContext, FurnitureProvider } from "./createContext";
import Main from "./Main";
import About from "./About";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from "./components/Footer";
export default function App() {
  return (

    <FurnitureProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </FurnitureProvider>
  )
}