import React from 'react'

const CenterHeading= ()=>{
    const mystyle = {
      position: "absolute",
      left:"50%",
      top:"35%",
      transform:"translate(-50%,-50%)",
      maxWidht:"90rem",
      width:"92%",
      color:'white',
    };
    const buttonStyle={
      background:" #7843e9",
      color: "white",
      textTransform: "uppercase",
      letterSpacing: "1px",
      display: "inline-block",
      fontWeight: "900",
      borderRadius: "8px",
      boxShadow: "0 5px 15px 0 rgba(0,0,0,.15)",
      transition: "transform .3s",
      marginTop:'50px',
      fontSize:'20px'
      
     
    }
    
    return (
      <>
    <div data-bs-spy="scroll"   style={mystyle} className='container d-flex flex-column align-items-center '>
    <h1 id="home"  className='font-weight-bold'>
    HEY, I'M ZOHAIR<br></br> <center style={{letterSpacing:10}}>BADSHAH</center>
    </h1>
    <h4 className='text-center'>
        A Machine Learning focused Developer building the innovative solutions
        <br></br>that leads to the success of the overall product
    </h4>
    <a href="#projects" className='inline-block' style={buttonStyle} type="button " class="btn ">PROJECTS</a>
    
    </div>


  
    </>
    )
  
}

export default  CenterHeading;