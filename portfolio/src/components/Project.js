import React from "react";
import "../styles/Project.css";
const Project = () => {
  return (
    <div data-bs-spy="scroll"  > 
      <h2 id="projects" className="project">
        <span style={{ marginTop: "50px" }}>PROJECTS</span>
        <div
          style={{
            alignContent: "center",
            backgroundColor: "rgba(65, 79, 158,0.8)",
            borderRadius: "35%",
            width: "30px",
            height: "10px",
            marginTop: "20px",
            marginBottom: "25px",
          }}
        ></div>
        <span
          style={{
            fontSize: "1.5rem",
            marginRight: "1px",
            marginLeft: "1px",
            fontWeight: "450",
            maxWidth: "65rem",
            margin: "auto",
            lineHeight: "1.6",
          }}
          className="text-muted"
        >
          Here you will find some of the personal and clients projects that I
          created with each project<br></br> containing its own case study
        </span>
      </h2>

      <span>
      <span className="project-example">
        <img
          style={{ width: "50%", display: "block", objectFit: "contain",backgroundColor:"#A0A0A0" }}
          src="https://i.postimg.cc/gktrCfGM/dopefolio.jpg"
        />
        <span className="project">
            <h1 >Dopefolio</h1>
            <p className="text-mutred">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
            <button type="button" class="btn btn-primary">Case Study</button>
        </span>
      </span>
      <span className="project-example">
        <img
          style={{ width: "50%", display: "block", objectFit: "contain" }}
          src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg"
        />
        <span className="project">
            <h1 >Dopefolio</h1>
            <p className="text-mutred">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
            <button type="button" class="btn btn-primary">Case Study</button>
        </span>
      </span>
      <span className="project-example">
        <img
          style={{ width: "50%", display: "block", objectFit: "contain" }}
          src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg"
        />
        <span className="project">
            <h1 >Dopefolio</h1>
            <p className="text-mutred">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
            <button type="button" class="btn btn-primary">Case Study</button>
        </span>
      </span>
      </span>
    </div>
  );   
};

export default Project;
