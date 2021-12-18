import React from 'react'
import logo from './logo.svg'
import './App.css'
import Topbar from './components/topbar/Topbar'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Topbar></Topbar>
      </div>
    </CssBaseline>
  )
}

export default App
