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
     
     <h6 style={{fontFamily:"poppins",margin:"10px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white",width:"100%"}}>Property Title</h6>
     <div style={{background:"white"}}>
              
 
    <div  class ='boxinput'>


        <div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
            <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Title</div>
            <div style={{fontSize:"20px",marginTop:"50px",color:"#0e1e8f",fontWeight:"700"}}>Location</div>
           
         

        </div>
        
        <div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
            <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}}  name="title" onChange={handleChange} /></div>
            <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="location" onChange={handleChange}/></div>
            
     
        </div>

        <div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
        <div style={{fontSize:"20px",marginTop:"15px",color:"#0e1e8f",fontWeight:"700"}}>Status</div>
        <div style={{fontSize:"20px",marginTop:"50px",color:"#0e1e8f",fontWeight:"700"}}>Rera ID</div>
           


        </div>
        
        <div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
            <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}}  name="status" onChange={handleChange}/></div>
            <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}}  name="rera" onChange={handleChange}/></div>
            
         
        </div>

    </div>
            

    
    

    <h6 style={{fontFamily:"poppins",borderLeft:"2px solid red",paddingLeft:"10px",background:"white",marginTop:"40px",marginBottom:"40px"}}>Property Description</h6>

    <textarea type="text" placeholder="KNOW ABOUT Property" name="description"
  onChange={handleChange} style={{width:"1200px",height:"200px",padding:"20px",background:"white"}} />
   
   <h6 style={{fontFamily:"poppins",marginTop:"40px",marginBottom:"40px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Project Details</h6>
   <div  class ='boxinput'>


<div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
    <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Project Area</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Sizes</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Total Flats</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Launch Date</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Configurations</div>
    <div style={{fontSize:"20px",marginTop:"35px",color:"#0e1e8f",fontWeight:"700"}}>Construction Type</div>
    <div style={{fontSize:"20px",marginTop:"25px",color:"#0e1e8f",fontWeight:"700"}}>No. of Parking</div>
    <div style={{fontSize:"20px",marginTop:"40px",color:"#0e1e8f",fontWeight:"700"}}>Ceiling Height</div>
    <div style={{fontSize:"20px",marginTop:"40px",color:"#0e1e8f",fontWeight:"700"}}>Internal Door Height</div>
    <div style={{fontSize:"20px",marginTop:"30px",color:"#0e1e8f",fontWeight:"700"}}>Parking Level</div>

</div>

<div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="projectarea" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="size" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="totalflats" onChange={handleChange} /></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="launchdate" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="configuration" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="constructiontype" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="noofparking" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ceilingheight" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="internaldorheight" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="parkinglevel" onChange={handleChange}/></div>

   
</div>

<div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
    <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Possesion Date</div>
    <div style={{fontSize:"20px",marginTop:"30px",color:"#0e1e8f",fontWeight:"700"}}>Total Towers</div>
    <div style={{fontSize:"20px",marginTop:"35px",color:"#0e1e8f",fontWeight:"700"}}>Total Floors</div>
    <div style={{fontSize:"20px",marginTop:"40px",color:"#0e1e8f",fontWeight:"700"}}>Project Status</div>
    <div style={{fontSize:"20px",marginTop:"40px",color:"#0e1e8f",fontWeight:"700"}}>Project Type</div>
    <div style={{fontSize:"20px",marginTop:"40px",color:"#0e1e8f",fontWeight:"700"}}>Lift Per Tower</div>
    <div style={{fontSize:"20px",marginTop:"40px",color:"#0e1e8f",fontWeight:"700"}}>Main Door Height</div>
    <div style={{fontSize:"20px",marginTop:"25px",color:"#0e1e8f",fontWeight:"700"}}>ClubHouse Size</div>
    <div style={{fontSize:"20px",marginTop:"30px",color:"#0e1e8f",fontWeight:"700"}}>Total Floors</div>
    <div style={{fontSize:"20px",marginTop:"30px",color:"#0e1e8f",fontWeight:"700"}}>Green Area</div>

    

</div>

<div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="possesiondate" onChange={handleChange} /></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="totaltowers" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="totalfloors" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="projectstatus" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="projecttype" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="liftpertower" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="maindoorheight" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="clubhousesize" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="totalfloors" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="greenarea" onChange={handleChange}/></div>
   
</div>

</div>
<h6 style={{fontFamily:"poppins",marginTop:"50px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Why You Should Consider This Property</h6>


<div  class ='boxinput'>


<div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
    <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Heading 1</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Heading 2</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Heading 3</div>
    
   

</div>

<div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="heading1" onChange={handleChange} /></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="heading2" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="heading3" onChange={handleChange}/></div>
    
   
</div>

<div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
    <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Heading 4</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Heading 5</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Heading 6</div>

    

</div>

<div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="heading4" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="heading5" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="heading6" onChange={handleChange}/></div>
 
</div>

</div>
<h6 style={{fontFamily:"poppins",marginTop:"50px",borderLeft:"2px solid red",paddingLeft:"10px",background:"white"}}>Amenities</h6>


<div  class ='boxinput'>


<div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
    <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Ammenity 1</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Ammenity 2</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Ammenity 3</div>
    
   

</div>

<div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ammenities1" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ammenities2" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ammenities3" onChange={handleChange}/></div>
    
   
</div>

<div style={{display:"block",width:"10%",margin:"30px 0px 0px 10px "}}>
    <div style={{fontSize:"20px",marginTop:"10px",color:"#0e1e8f",fontWeight:"700"}}>Ammenity 4</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Ammenity 5</div>
    <div style={{fontSize:"20px",marginTop:"45px",color:"#0e1e8f",fontWeight:"700"}}>Ammenity 6</div>

    

</div>

<div style={{display:"block",width:"35%",margin:"20px 0px 0px 10px "}}>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ammenities4" onChange={handleChange}/></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ammenities5" onChange={handleChange} /></div>
    <div style={{marginBottom:"5px"}}><input style={{width:"70%",height:"40px",border:"1px solid black"}} name="ammenities6" onChange={handleChange}/></div>
 
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

 <div style={{marginLeft:"30%",marginTop:"80px"}}> <button onClick={handleClick} class="btn">Create </button></div>
 

  
  
  
  </div>;
};

export default AddFlat;
