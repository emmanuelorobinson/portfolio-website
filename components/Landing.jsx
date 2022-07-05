import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Head from "next/head";

const Landing = () => {
  const meta = {
    title:
      "Emmanuel Robinson - Software Engineer, Computer Science and BI Student",
    description: `Emmanuel Robinson is a software engineer, computer science and business information systems student at Murdoch University.`,
    image: "/assets/avatar.png",
    type: "website",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="display-flex ">
        <Header />
        <Hero />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
