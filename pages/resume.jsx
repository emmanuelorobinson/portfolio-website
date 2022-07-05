import React from "react";
import Header from "../components/Header";
import Head from "next/head";

const resume = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta content="Emmanuel Robinson's resume" name="description" />
        <meta property="og:title" content="Resume" />
        <meta property="og:description" content="Emmanuel Robinson's resume" />
        <meta property="og:image" content="/assets/avatar.png" />
        <neta property="author" content="Emmanuel Robinson" />
      </Head>
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
