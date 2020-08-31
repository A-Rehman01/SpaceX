import React from 'react';
import './App.css';

//Components
import { Index } from '../Launch/index'
import { IndexDetail } from '../LaunchDetail/index'
function App() {
  return (
    <div className="App">
      App components
      <Index />
      <IndexDetail />
    </div>
  );
}

export default App;