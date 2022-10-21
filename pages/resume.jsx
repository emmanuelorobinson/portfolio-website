import React from "react";
import Header from "../components/Header";
import Head from "next/head";

const resume = () => {
  return (
    <div>
      <Head>
        <title>Emmanuel Ejakpomewhe's Resume</title>
        <meta content="Emmanuel Ejakpomewhe's resume" name="description" />
        <meta property="og:title" content="Resume" />
        <meta property="og:description" content="Emmanuel Robinson Ejakpomewhe's resume" />
        <meta property="og:image" content="/assets/avatar.png" />
        <neta property="author" content="Emmanuel Ejakpomewhe" />
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
