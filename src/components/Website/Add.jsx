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


  return <div className="title" style={{background:"white",boxShadow:" 0px 10px 10px 10px #888888",padding:"30px"}}> 
   
     <div >
     
     <h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white",width:"100%"}}>Property Title</h6>
     <div style={{display:"flex"}}>
<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Title</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Location</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>


</div>


<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Status</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Rera ID</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>


</div>
</div>



     <div style={{background:"white"}}>
              
 
   
            

    
    

    <h6 style={{fontFamily:"poppins",borderLeft:"2px solid red",paddingLeft:"10px",background:"white",marginTop:"40px",marginBottom:"40px"}}>Property Description</h6>

    <textarea type="text" placeholder="KNOW ABOUT Property" name="description"
  onChange={handleChange} style={{width:"1200px",height:"200px",padding:"20px",background:"white"}} />
   
   <h6 style={{fontFamily:"poppins",marginTop:"50px",borderLeft:"2px solid red",marginBottom:"20px",paddingLeft:"10px",background:"white"}}>Project Details</h6>
<div style={{display:"flex"}}>
<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Project Area</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Sizes</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Total Flats</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Launch Date</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Configurations</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Construction Type</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>No. of Parking</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ceiling Height</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>

<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Internal Door Height</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Parking Level</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>

</div>


<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Project Area</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Sizes</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Total Flats</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Launch Date</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Configurations</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Construction Type</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>No. of Parking</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"30%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ceiling Height</div>
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
<h6 style={{fontFamily:"poppins",marginTop:"50px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Why You Should Consider This Property</h6>

<div style={{display:"flex"}}>
<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Heading1</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Heading2</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Heading3</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>



</div>


<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Heading4</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Heading5</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Heading6</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>


</div>
</div>






<h6 style={{fontFamily:"poppins",marginTop:"50px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Amenities</h6>


<div style={{display:"flex"}}>
<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ammenities1</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ammenities2</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ammenities3</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>



</div>


<div style={{width:"45%"}}>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ammenities4</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ammenities5</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>
<div style={{display:"flex"}}>
    <div  style={{fontSize:"16px",color:"#0e1e8f",fontWeight:"700",width:"20%",textAlign:"right",height:"40px",marginTop:"30px",marginRight:"20px"}}>Ammenities6</div>
    <div style={{width:"70%",height:"50px"}}><input style={{width:"400px",height:"30px",border:"1px solid #A8A8A8"}}/></div>
</div>


</div>
</div>

    {/*

    <div class='labeldiv'><label class='label'>Title</label></div>
         <div class='inputdiv'><input  class='custominputfield' name="title"
   onChange={handleChange} />
</div>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="location"
   onChange={handleChange}/>
  <span class="placeholder">Enter Location</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="status"
  onChange={handleChange}/>
  <span class="placeholder">Enter Status</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="rera"
  onChange={handleChange}/>
  <span class="placeholder">Enter Rera Id</span>
  <span class="border"></span>
</label>
 
  
  </div>
  <h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Property Description</h6>
  <div  style={{background:"white"}}>
  <label class="custom-field three" >
  <textarea type="text" placeholder="KNOW ABOUT Property" name="description"
  onChange={handleChange} style={{width:"1000px",height:"200px",padding:"20px",background:"white"}} />
  
  
</label>
         <h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Project Details</h6>
         
         <label class="custom-field three">
  <input type="text" placeholder="Project Area"
  name="area"
  onChange={handleChange}
   style={{color:"black"}}/>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="sizes"
  onChange={handleChange}
  />
  <span class="placeholder">Sizes</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="totalflats"
  onChange={handleChange}/>
  <span class="placeholder">Total Flats</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="launchdate"
  onChange={handleChange}/>
  <span class="placeholder">Launch Date</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="possesiondate"
  onChange={handleChange}/>
  <span class="placeholder">Possesion Date</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="totaltowers"
  onChange={handleChange}/>
  <span class="placeholder">Total Towers</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="totalfloors"
  onChange={handleChange}/>
  <span class="placeholder">Total Floors</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="projectstatus"
  onChange={handleChange}/>
  <span class="placeholder">Project Status</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="propertytype"
  onChange={handleChange}/>
  <span class="placeholder">Property Type</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="configurations"
  onChange={handleChange}/>
  <span class="placeholder">Configurations</span>
  <span class="border"></span>
</label>


<h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Why You Should Consider This Property</h6>


<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="point1"
  onChange={handleChange}/>
  <span class="placeholder">Point 1</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="point2"
  onChange={handleChange}/>
  <span class="placeholder">Point 2</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="point3"
  onChange={handleChange}/>
  <span class="placeholder">Point 3</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="point4"
  onChange={handleChange}/>
  <span class="placeholder">Point 4</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
    name="point4"
    onChange={handleChange}/>
  <span class="placeholder">Point 5</span>
  <span class="border"></span>
</label>
 
<h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Property Detail</h6>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
    name="propertyid"
    onChange={handleChange}/>
  <span class="placeholder">Property ID</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="status2"
  onChange={handleChange}/>
  <span class="placeholder">Status</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="launchdate"
  onChange={handleChange}/>
  <span class="placeholder">Launch Date</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="projecttype"
  onChange={handleChange}/>
  <span class="placeholder">Project type</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="Configurations"
  onChange={handleChange}/>
  <span class="placeholder">Configurations</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
   name="Constructiontype"
   onChange={handleChange}
  />
  <span class="placeholder">Construction Type</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="totalflats"
  onChange={handleChange}/>
  <span class="placeholder">Total Flats</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="noofparking"
  onChange={handleChange}/>
  <span class="placeholder">No. of parking</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="ceilingheight"
  onChange={handleChange}/>
  <span class="placeholder">Ceiling height</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="internaldoorheight"
  onChange={handleChange}/>
  <span class="placeholder">Internal Door Height</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="parkinglevel"
  onChange={handleChange}/>
  <span class="placeholder">Parking Level</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="liftpertower"
  onChange={handleChange}/>
  <span class="placeholder">Lift per tower</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="maindoorheight"
  onChange={handleChange}/>
  <span class="placeholder">Main Door Height</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="clubhousesize"
  onChange={handleChange}/>
  <span class="placeholder">ClubHouseSize</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="totalfloors"
  onChange={handleChange}/>
  <span class="placeholder">Total Floors</span>
  <span class="border"></span>
</label>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  name="greenarea"
  onChange={handleChange}/>
  <span class="placeholder">Green Area</span>
  <span class="border"></span>
</label>

<h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Amenities</h6>

<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"
  />
  <span class="placeholder">Point 1</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 2</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 3</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 4</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 5</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 6</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 8</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 9</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 10</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 11</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 12</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 13</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 14</span>
  <span class="border"></span>
</label>
<label class="custom-field three">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Point 15</span>
  <span class="border"></span>
</label>

<h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Price Range</h6>


<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 1 Type</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 1 Carpet Area</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 1 Price</span>
  <span class="border"></span>
</label>

<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 2 Type</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 2 Carpet Area</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 2 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 3 Type</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 3 Carpet Area</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 3 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Type</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Carpet Area</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>

<h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Floor Plans</h6>


<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>
<label class="custom-field three" style={{width:"380px"}}>
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Property 4 Price</span>
  <span class="border"></span>
</label>


  
  */ }
  
  </div>
  

  
  
</div>

 <div style={{marginLeft:"35%",marginTop:"80px"}}> <button onClick={handleClick} class="btn">Create </button></div>
 

  
  
  
  </div>;
};

export default AddFlat;
