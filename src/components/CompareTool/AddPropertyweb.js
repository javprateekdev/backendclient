import React from 'react';
import Navbar from "./Navbar";
import AddProperty from './AddProperty';

const AddPropertyweb= () => {
  return (
    <div style={{Width:"100%",marginLeft:"15%",marginTop:"5%"}}>
  
    <h2 class="reports" style={{height:"6vh",width:"100%",margin:"10px",color:"#0e1e8f",borderBottom:"3px solid #0e1e8f"}}>Compare Tool</h2>
    <h4 style={{height:"6vh",width:"100%",margin:"10px",color:"gray",fontSize:"24px"}}>Create Property Data</h4>
    <AddProperty />
</div>
  )
}

export default AddPropertyweb;
;