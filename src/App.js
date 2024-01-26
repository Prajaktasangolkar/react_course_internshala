import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About.jsx';
import Navbar from './Navbar.js';
import Tests from './components/Tests.jsx';
import Product from './components/Product.jsx';
import Coding from './components/Coding.jsx';
import State from './components/State.jsx';
import Greeting from './components/Greeting.jsx';
import Codingp40 from './components/Codingp40.jsx';
import Api from './components/Api.jsx';
// import Other from './components/Other.js';

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tests' element={<Tests/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/coding' element={<Coding/>} />
          <Route path='/state' element={<State/>} />
          <Route path='/greeting' element={<Greeting/>} />
          <Route path='/code' element={<Codingp40/>} />
          <Route path='/api' element={<Api/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
