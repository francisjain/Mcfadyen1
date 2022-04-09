import React, { useState } from 'react'
import GrassIcon from '@mui/icons-material/Grass';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css"
import { IconButton } from '@mui/material';

function NavBar() {
  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    setsidebar((prevState) => !prevState)
  }
  return (
    <div className="header">
      <GrassIcon style={{ fontSize: 50, marginLeft: "30px"}} />
      <div className="contents">
        <p className="underline">--------------------------------------------</p>
        <div className="open">
          <IconButton onClick={toggleSidebar}><MenuIcon style={{ zIndex: 100, color: "white", backgroundColor: "transparent" }} /></IconButton>
        </div>
        <ul className={sidebar ? "items  items__open" : "items"}>
          <div   className="close" >
            <IconButton onClick={toggleSidebar}><CloseIcon style={{ zIndex: 100, color: "white"}}/></IconButton>
            </div>
          <li >Home</li>
          <li >Hope</li>
          <li >Peace</li>
          <li >Love</li>
          <li >Unity</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar