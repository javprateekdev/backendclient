import React from 'react';
import {  Link } from "react-router-dom";

const Navbarweb = () => {
  return (
    <div>
        <div style={{background:"white",height:"50px",borderRadius:"10px",width:"100%",marginTop:"1%",display:"flex",padding:"5px"}}>
        <div className='navlink'>All Properties</div>
            <Link to=""> <div className='navlink'> All Flats</div></Link>
            <Link to="/AddProperty"><div className='navlink'>Add Property</div></Link>
            <Link to="/AddFlatweb"><div className='navlink'>Add Flats</div></Link>
        </div>


    </div>
  )
}

export default Navbarweb;