import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div data-bs-spy="scroll">
      <h2 id="about" className="about">
        <span style={{ marginTop: "50px", color: "white" }}>ABOUT ME</span>
        <div
          style={{
            alignContent: "center",
            backgroundColor: "rgba(65, 79, 158,0.8)",
            borderRadius: "35%",
            width: "30px",
            height: "10px",
            marginTop: "20px",
            marginBottom: "300px",
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
            color: "white",
          }}
          className=""
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms<br></br> of programming and technology
        </span>
      </h2>

      <div className="about2 hide-on-mobile2">
        <span style={{ marginLeft: "8%", maxWidth: "inherit", marginRight: "10%" }}>
          <h3 style={{ color: "white" }}>Get to Know me!</h3>
          <h4
            style={{
              fontSize: "1.2rem",
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "1rem",
              justifyContent: "center",
              marginTop: "20px",
              color: "white",
            }}
            className=""
          >
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my <a href="https://www.linkedin.com/in/zohairbadshah/" target="_blank" rel="noreferrer">Linkedin</a> where I post useful content related to Web Development
              and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </h4>
        </span>
        <span style={{ maxWidth: "inherit" }}>
          <h3 style={{ color: "white" }}>My Skills</h3>
          <span className="round-box text-white">
            <span class="custom-ring">React</span>
            <span class="custom-ring">Node</span>
            <span class="custom-ring">JavaScript</span>
            <span class="custom-ring">Python</span>
            <span class="custom-ring">Flutter</span>
            <span class="custom-ring">ML</span>
            <span class="custom-ring">AI</span>
            <span class="custom-ring">HTML</span>
            <span class="custom-ring">CSS</span>
            <span class="custom-ring">DSA</span>
            <span class="custom-ring">Git</span>
            <span class="custom-ring">GitHub</span>
            <span class="custom-ring">MongoDb</span>
            <span class="custom-ring">SQL</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
