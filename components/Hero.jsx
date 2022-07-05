import React from "react";

const Hero = () => {
  return (
    // Hero container, allows for styling of the hero section and its contents
    <div className="hero-section">
      <div className="hero-container ">
        <h1>Hello, my name is</h1>
        <h2>Emmanuel Robinson.</h2>
        <h3>{"I like building cool things."}</h3>
        <p>
          {
            "I'm currently a Computer Science and Business Infromation Systems Double Major Student at Murdoch University. I love learning new stack/technology. I focus on understanding the most I can in different technologies."
          }
        </p>
      </div>
      <div className="image_container">
          <img src="assets/Me2.png" alt="Emmanuel Robinson Memoji" />
      </div>
    </div>
  );
};

export default Hero;
