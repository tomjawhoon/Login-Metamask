import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginSteponepage from './pages/LoginSteponepage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login1" element={<LoginSteponepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
