import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import 'antd/dist/antd.css';
// import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connectmetamask from "./pages/connectmetamask"
import Switchaccount from "./pages/switchaccount"
import Switchnetwork from "./pages/switchnetwork"
import Mobileconnect from "./pages/mobileconnect"
import Homes from "./pages/Homepage"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homes />} />
        <Route path="/connectmetamask" element={<Connectmetamask />} />
        <Route path="/switchaccount" element={<Switchaccount />} />
        <Route path="/switchnetwork" element={<Switchnetwork />} />
        <Route path="/mobileconnect" element={<Mobileconnect />} />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
)
