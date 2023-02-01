import React from 'react'
import Navbar from './Navbar';
import AllData from './AllData'

const AllDatapage = () => {
  return (
    <div style={{Width:"100%",marginLeft:"15%"}}>
   
    <h2 class="reports" style={{borderTopRadius:"10px",background:"rgb(31 90 216)",height:"6vh",width:"100%",borderRadius:"30px",margin:"10px"}}>All Property Data</h2>
    <AllData />
</div>
  )
}

export default AllDatapage