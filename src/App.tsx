import React from 'react'
import logo from './logo.svg'
import './App.css'
import Topbar from './components/topbar/Topbar'
import { Container, CssBaseline } from '@mui/material'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AssetList from './pages/assetList/AssetList'
function App() {
  return (
    <CssBaseline>
      <Router>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/">
              <Route path="home" element={<Home></Home>}></Route>
              <Route path="assets" element={<AssetList></AssetList>}></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </CssBaseline>
  )
}

export default App
