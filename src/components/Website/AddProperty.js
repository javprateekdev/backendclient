import React from 'react';
import Navbar from "./Navbar";
import Add from './Add';

const AddProperty = () => {
  return (
    <div style={{Width:"100%",marginLeft:"15%",marginTop:"5%"}}>
  
    <h2  style={{height:"6vh",width:"100%",margin:"10px",color:"#0e1e8f",borderBottom:"3px solid #0e1e8f"}}>Website Content Management</h2>
    <h4 style={{height:"6vh",width:"100%",margin:"10px",color:"gray",fontSize:"24px"}}>Create Flat Data</h4>
    <Add />
</div>
  )
}

export default AddProperty;