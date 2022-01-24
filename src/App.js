import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Update from './Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/update/:id" element={<Update />}  />
          {/* <Route path="*" >Page not Found</Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
