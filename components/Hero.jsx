import React from "react";

const Hero = () => {
  return (
    // Hero container, allows for styling of the hero section and its contents
    <div className="hero-section flex justify-center items-center v-screen">
      <div className="hero-container ">
        <h1>Hello, my name is</h1>
        <h2>Emmanuel Robinson</h2>
        <h3>
          {"Eat, sleep, code, repeat."}
        </h3>
        <p>
          {"I'm currently a Computer Science and Business Infromation Systems Double Major Student at Murdoch University. I love learning new stack/technology. I focus on understanding the most I can in different technologies."}
        </p>
      </div>
      <div className="hero-container image_container">
        <img src="assets/Me.png" alt="Emmanuel Robinson" />
      </div>
    </div>
  );
};

export default Hero;
