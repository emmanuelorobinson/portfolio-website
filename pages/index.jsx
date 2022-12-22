
import Head from "next/head";
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import ThemeContextWrapper from '../themeContextWrapper'

export default function Home() {

  const meta = {
    title: "Emmanuel Ejakpomewhe",
    description: `Emmanuel Ejakpomewhe (Robinson). A software engineer, computer science and business information systems double major at Murdoch University.`,
    image: "/assets/avatar.png",
    type: "website",
  };

  return (
    <ThemeContextWrapper>
      <div className='theme-provider'>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <meta property="og:type" content={meta.type} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta property="author" content="Emmanuel Robinson" />
        </Head>
        <div className="display-flex ">
          <Header />
          <Hero />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      </div>
    </ThemeContextWrapper>
    );
}
