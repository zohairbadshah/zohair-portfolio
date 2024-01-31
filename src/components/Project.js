import React from "react";
import "../styles/Project.css";

const Project = () => {
  return (
    <div data-bs-spy="scroll" style={{backgroundColor:"white"}}>
      <h2 id="projects" className="project">
        <span style={{ marginTop: "50px", color: "black" }}>PROJECTS</span>
        <div
          style={{
            alignContent: "center",
            backgroundColor: "rgba(65, 79, 158,0.8)",
            borderRadius: "35%",
            width: "30px",
            height: "10px",
            marginTop: "20px",
            marginBottom: "50px",
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
            color: "black",
          }}
          className=""
        >
          Here you will find some of the personal projects that I
          created
        </span>
      </h2>

      <div>
        <div className="project-example">
          <img
            style={{
              width: "50%",
              display: "block",
              objectFit: "contain",
              backgroundColor: "#A0A0A0",
            }}
            src="https://i.postimg.cc/V6ZvdtYF/Investech.png"
            alt="Project 1"
          />
          <div className="project">
            <h1 style={{ color: "black" }}>InvesTech</h1>
            <p
              className=""
              style={{
                color: "black",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              This project hosts an intuitive web application that offers
              real-time stock price visualization and predictions using
              cutting-edge AI technologies. Built with React, Chart.js, and the
              integration of Machine Learning methods, this application provides
              a comprehensive platform for investors to make informed decisions
              and provide them with accurate forecasts.
            </p>
            <a
              type="button"
              href="https://github.com/zohairbadshah/InvesTech"
              target="_blank"
              className="btn"
              style={{
                fontWeight: "bold",
                background: "rgb(120, 67, 233)",
                color: "white",
              }}
            >
              GitHub
            </a>
          </div>
        </div>
        {/* <div className="project-example">
          <img
            style={{
              width: "50%",
              display: "block",
              objectFit: "contain",
              backgroundColor: "#A0A0A0",
            }}
            src="https://i.postimg.cc/vHFG8y9j/kalaakar.png"
            alt="Project 2"
          />
          <div className="project">
            <h1 style={{ color: "black" }}>Kalaakar</h1>
            <p
              className=""
              style={{
                color: "white",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              Kalakar is a collaborative drawing space for children to create
              drawings together on separate systems where one canvas can be used
              by any number of users. They have options to change colours and
              brush strokes with the inclusion of saving their drawings or
              resetting it. With this collaborative drawing space we aim to
              teach children about team work. This website can help children
              build up their creative mindset and team spirit at an early age
            </p>
            <a
              type="button"
              href="https://github.com/zohairbadshah/Kalaakar"
              target="_blank"
              className="btn"
              style={{
                fontWeight: "bold",
                background: "rgb(120, 67, 233)",
                color: "white",
              }}
            >
              GitHub
            </a>
          </div>
          <div>
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
