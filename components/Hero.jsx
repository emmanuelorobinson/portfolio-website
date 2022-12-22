import React from "react";

const Hero = () => {
  return (
    // Hero container, allows for styling of the hero section and its contents
    <div className="hero-section">
      <div className="hero-container ">
        <h1>Hello, my name is</h1>
        <h2>Emmanuel Ejakpomewhe.</h2>
        <h3>{"I like building cool things."}</h3>
        <p>
          {
            "Hey, my name is Emmanuel Ejakpomewhe. I usually go by Emmanuel Robinson because it saves time having to teach people the correct pronunciation of my family name. I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently a SWE @ WeDance."
          }
        </p>
      </div>
      <div className="image_container">
        <img src="assets/Me2.png" alt="Emmanuel Ejakpomewhe Memoji" />
      </div>
    </div>
  );
};

export default Hero;
