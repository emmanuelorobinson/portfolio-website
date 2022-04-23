import React from "react";
import Header from "../components/Header";

const resume = () => {
  return (
    <div>
      <Header />
      <div className="resume_container">
        <object
          width="100%"
          height="1100"
          type="application/pdf"
          data="/assets/EmmanuelRobinson_Resume.pdf"
        >
          <p>PDF cannot be displayed.</p>
        </object>
        <div className="spaceAbout"></div>
      </div>
    </div>
  );
};

export default resume;
