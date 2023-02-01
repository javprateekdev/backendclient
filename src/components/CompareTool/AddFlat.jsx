import axios from "axios";
import React from "react";
import { useState } from "react";


const AddFlat = () => {

   const [book, setBook] = useState({
    
    
    title:"",
    location:"",
    status:"",
    rera:"",
    description:"",
    area:"",
    size:"",
    configuration:"",
    projectarea:"",
    totalflats:"",
    launchdate:"",
    possesiondate:"",
    constructiontype:"",
    noofparking:"",
    totaltowers:"",
    totalfloors:"",
    projectstatus:"",
    propertytype:"",
    internaldorheight:"",
    ceilingheight:"",
    maindoorheight:"",
    internaldorheight:"",
    parkinglevel:"",
    launchdate:"",
    totalfloors:"",
    greenarea:"",
    totaltowers:"",
    heading1:"",
    heading2:"",
    heading3:"",
    heading4:"",
    heading5:"",
    heading6:"",
    ammenites1:"",
    ammenites2:"",
    ammenites3:"",
    ammenites4:"",
    ammenites5:"",
    ammenites6:""

  });
  

 

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:8000/create", book);
     
    } catch (err) {
      console.log(err);
      
    }
  };


  return <div className="title" style={{background:"white"}}> 
   
     <div >
     
    
     <div style={{background:"white"}}>

    

    
   
   <h6 style={{fontFamily:"poppins",marginTop:"40px",marginBottom:"40px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Property Label</h6>
   <div style={{display:"flex"}}>
<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Project Plot Area</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Green Area</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Property Status</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Price Range</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Total Towers</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Total Flats</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Oc Status</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Density</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>

<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Podium/Nonpodium</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Approved Bank</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>

</div>


<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Club House Size</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Construction Type</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Tower Heights</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Lift Per Tower</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Floor vs Flats</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Possesion date</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Lobby</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Distance</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>

<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Internal Door Height</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Parking Level</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>

</div>
</div>
  </div>
  

  
  
</div>

 <div style={{marginLeft:"40%",marginTop:"80px"}}> <button onClick={handleClick} class="btn">Create </button></div>
 

  
  
  
  </div>;
};

export default AddFlat;
