import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import React from 'react'
import './topbar.css'
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">WISTAR</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <Language></Language>
          </div>
          <div className="topbarIconsContainer">
            <Settings></Settings>
          </div>
          <div className="topbarIconsContainer">
            <NotificationsNone></NotificationsNone>
          </div>
        </div>
      </div>
    </div>
  )
}
