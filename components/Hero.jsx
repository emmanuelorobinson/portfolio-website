import React from "react";
import mydata from "../mydata";

const Hero = () => {
  return (
    // Hero container, allows for styling of the hero section and its contents
    <div className="hero-section">
      <div className="hero-container ">
        <h1>Hello, my name is</h1>
        <h2>Emmanuel Ejakpomewhe.</h2>
        {/* <h3>{"I like building cool things."}</h3> */}
        <br />
        <p>
          {mydata.landingPagePara}
        </p>
      </div>
      <div className="image_container">
        <img src="avatar.png" alt="Emmanuel Ejakpomewhe Memoji" />
      </div>
    </div>
  );
};

export default Hero;
