import React from 'react';
import { BiSearch } from "react-icons/bi";
import Clock from 'react-live-clock';
import {FaUserCircle} from 'react-icons/fa'

const Topbar = () => {
  return (
    <div style={{background:"#0e1e8f",height:"7vh",width:"100%",position:"fixed",display:"flex"}}>
      <div style={{marginLeft:"85%"}}><FaUserCircle style={{width:"80px",height:"60px"}}/></div>
      <div style={{color:"white",marginTop:"18px"}}>Admin HouseThat</div>
    </div>
  )
}

export default Topbar