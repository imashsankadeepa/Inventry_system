
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Additem from './components/Additem/Additem';
import DisplayItem from './components/DisplayItem/DisplayItem';
import UpdateItem from './components/UpdateItem/UpdateItem';
import React from 'react';

function App() {
  return (
    
    <div>
      <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additem" element={<Additem />} />
        <Route path="/displayitem" element={<DisplayItem />} />
        <Route path="/updateitem/:id" element={<UpdateItem />} />
      </Routes>
      </React.Fragment>
    
    </div>
  );
}

export default App;
