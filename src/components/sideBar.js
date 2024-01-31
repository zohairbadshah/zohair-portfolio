import React from "react";
import "../App.css";

const SideBar = () => {
  const mystyle = {
    position: "absolute",
    top: "32%",
    transform: "translateY(-50%)",
    background: "#757373",
    boxShadow: " 0 7px 29px 0",
    width: "4rem",
  };
  return (
    <div style={mystyle} className="hide-on-mobile">
      <div
        style={{ width: "4rem", boxSizing: "inherit", fontFamily: "inherit" }}
      >
        <a
          style={{
            width: "100%",
            display: "block",
            padding: "1rem",
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
            width: "100%",
            display: "block",
            padding: "1rem",
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
            width: "100%",
            display: "block",
            padding: "1rem",
            paddingLeft: "0.5rem",

            transition: "background .3s",
            borderRadius: "5px",
          }}
          href="https://drive.google.com/file/d/1SzfVOyKSbgehXaDaRysbDnToEueThZoW/view?usp=drive_link"
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
  );
};

export default SideBar;
