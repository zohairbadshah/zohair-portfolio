import React from "react";

const Conclusion = () => {
  return (
    <div className="conclusion">
  
      <span style={{maxWidth:"50%",marginRight:"28%",marginLeft:"3%",marginTop:"6%"}}>
        <h1 style={{textAlign:"left",fontSize:"1.2rem"}}>ZOHAIR BADSHAH</h1>
        <h5  style={{fontSize:"1rem"}}>
        A Machine Learning focused Developer building the innovative solutions
        <br></br>that leads to the success of the overall product
        </h5>
      </span>
      <span style={{marginTop:"5%"}}>
        <h1 style={{fontSize:"1.2rem"}}>SOCIAL</h1>
       <div style={{display:"flex",flexDirection:"row"}}>
       <div
          style={{ width: "4rem", boxSizing: "inherit", fontFamily: "inherit" }}
        >
          <a
            style={{
              width: "80%",
              backgroundColor: "#b1adad",
              display: "block",
              padding: "0.5rem",
              paddingLeft: "0.5rem",
              transition: "background .3s",
              borderRadius: "5px",
            }}
            href="https://www.linkedin.com/in/zohairbadshah/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              title="Linkedin"
              src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
              alt="Zohair Badshah Linkedin Profile"
            />
          </a>
        </div>

        <div
          style={{ width: "4rem", boxSizing: "inherit", fontFamily: "inherit" }}
        >
          <a
            style={{
              backgroundColor: "#b1adad",

              width: "80%",
              display: "block",
              padding: "0.5rem",
              paddingLeft: "0.5rem",

              transition: "background .3s",
              borderRadius: "5px",
            }}
            href="https://github.com/zohairbadshah"
            target="_blank"
            rel="noreferrer"
          >
            <img
              title="Github"
              src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
              alt="Zohair Badshah Github Profile"
            />
          </a>
        </div>

        <div
          style={{ width: "4rem", boxSizing: "inherit", fontFamily: "inherit" }}
        >
          <a
            style={{
              backgroundColor: "#b1adad",

              width: "80%",
              display: "block",
              padding: "0.5rem",
              paddingLeft: "0.5rem",

              transition: "background .3s",
              borderRadius: "5px",
            }}
            href="https://drive.google.com/file/d/1zBx6Xc9MEcMfhFZU0LjbvjgKJMSUTLpe/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              title="Resume"
              src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
              alt="Zohair Badshah Resume"
            />
          </a>
          
        </div>
        
       </div>
       
      </span>
    
    </div>
    
  );
};

export default Conclusion;
