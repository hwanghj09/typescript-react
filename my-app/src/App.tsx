import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './Store';
import HomePage from './HomePage';


const App=() =>{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/store' element={<Store />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
