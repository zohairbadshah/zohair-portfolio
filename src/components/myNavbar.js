import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <nav style={{ zIndex: 99999 }} className="navbar navbar-expand-lg navbar-light bg-body-light fixed-top py-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img 
                        style={{ borderRadius: "10px" }}
                        src="https://i.postimg.cc/Y2zhC1tB/myPhoto.png"
                        className="d-inline-block align-top mx-2"
                        width="30"
                        height="30"
                        alt=""
                    />
                    Zohair Badshah
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3 navbar-text">
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                        </li>
                        <li className="nav-item mx-3 navbar-text">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item mx-3 navbar-text">
                            <a className="nav-link" href="#projects">PROJECTS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
