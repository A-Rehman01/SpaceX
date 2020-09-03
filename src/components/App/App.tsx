import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//Components
import { Index } from '../Launch/index'
import { IndexDetail } from '../LaunchDetail/index'
import { Navbar } from '../Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/:spaceid' element={<IndexDetail />} />
      </Routes>
    </div>
  );
}

export default App;