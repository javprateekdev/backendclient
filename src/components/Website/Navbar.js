import React from 'react';
import {  Link } from "react-router-dom";

const Navbarweb = () => {
  return (
    <div>
        <div style={{background:"white",height:"50px",borderRadius:"10px",width:"100%",marginTop:"1%",display:"flex",padding:"5px"}}>
        <Link to="/AllData"><div className='navlink'>All Properties</div></Link>
            <Link to="/Website"> <div className='navlink'> Add Featured Properties</div></Link>
            <div className='navlink'>Trending Properties</div>
            <div className='navlink'>Featured Properties</div>
            <div className='navlink'>Featured Properties</div>
            <div className='navlink'>Featured Properties</div>
          

        </div>


    </div>
  )
}

export default Navbarweb