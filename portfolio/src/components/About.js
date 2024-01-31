import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div data-bs-spy="scroll" >
      <h2 id="about" className="about">
        <span style={{ marginTop: "50px" }}>ABOUT ME</span>
        <div
          style={{
            alignContent: "center",
            backgroundColor: "rgba(65, 79, 158,0.8)",
            borderRadius: "35%",
            width: "30px",
            height: "1px",
            marginTop: "20px",
            marginBottom: "30px",
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
          Here you will find more information about me, what I do, and my
          current skills mostly in terms<br></br> of programming and technology
        </span>
      </h2>

      <div className="about2 hide-on-mobile2">
        <span  style={{ marginLeft: "8%", maxWidth: "inherit", marginRight: "10%" }}>
          <h3>Get to Know me!</h3>
          <h4
            style={{
              fontSize: "1.2rem",
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "1rem",
              justifyContent: "center",
              marginTop: "20px",
            }}
            className="text-muted"
          >
            <p>
               I'm a Machine Learning and Data Science Enthusiast with Industry Experience<br></br>developing End-to-End solutions that drive success for diverse projects.<br></br>Explore my work in the Projects section, showcasing my proficiency in building impactful Web Applications integrated with State-of-the-Art ML techniques.
            Currently open to job opportunities that align with my skills and experience. Feel free to reach out if you have an exciting opportunity for me to contribute, learn, and grow.
            </p>
            <p>
               I also like sharing content related to the stuff that I have
              learned over the years.Feel free to Connect or Follow me on
              my <a href="https://www.linkedin.com/in/zohairbadshah/" target="_blank" rel="noreferrer">Linkedin</a>.
            </p>
          </h4>
        </span>
        <span style={{   maxWidth: "inherit" }}>
          <h3>My Skills</h3>
          <span className="round-box ">
            <span class="custom-ring">Python</span>
            <span class="custom-ring">Tensorflow</span>
            <span class="custom-ring">Deep Learning</span>
            <span class="custom-ring">Machine Learning</span>
            <span class="custom-ring">HTML</span>
            <span class="custom-ring">CSS</span>
            <span class="custom-ring">Problem Solving</span>
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
