import React from 'react';
import AllProperties from './AllProperties';
import Navbar from './Navbar';

const Website = () => {
  return (
    <div style={{Width:"100%",marginLeft:"15%"}}>
       
        <h2 class="reports" stle={{background:"#321ce3",borderTopRadius:"10px",background:"white"}}>Create Property</h2>
        <AllProperties />
    </div>
  )
}

export default Website