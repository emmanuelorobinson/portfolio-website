import React from "react";
import Link from "next/link";
import classes from "../styles/navbar.module.css";

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [cssStyle, setCssStyle] = React.useState(classes["nav-menu"]);
  const [windowState, setWindowState] = React.useState(false);

  React.useEffect(() => {
    //listen for resize
    if (window.innerWidth < 768 && navbarOpen) {
      setCssStyle(classes["nav-open"]);
      setWindowState(true);
    } else {
      setCssStyle(classes["nav-menu"]);
      setWindowState(false);
    }
  }, [window, navbarOpen]);

  return (
    <nav className={classes.navigation}>
      <div className={classes.container}>
        <Link href="/">
          <a>
            <span className>emmanuel robinson.</span>
          </a>
        </Link>

        <button
          className={classes.hamburger}
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={windowState ? cssStyle : classes["nav-menu"]}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a>Projects</a>
              </Link>
            </li>

            <li>
              <Link href="/#contacts">
                <a>Contacts</a>
              </Link>
            </li>
            <li>
              <Link href="/resume" passHref>
                <a className="resume-button">
                  <button>Resume</button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
