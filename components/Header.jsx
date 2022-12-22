import React from "react";
import Link from "next/link";
import classes from "../styles/navbar.module.css";
import { ThemeContext, themes } from "../contexts/theme-context";

const Header = (props) => {

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <nav className={classes.navigation}>
      <div className={classes.container}>
        <Link href="/">
          <a>
            <span className>emmanuel ejakpomewhe.</span>
          </a>
        </Link>

        <div>
          <ul className="flex flex-row space-x-4">
            <li style={
              {
                cursor: "pointer",
              }
            }>
              <ThemeContext.Consumer>
                {({changeTheme}) => (
                  <span onClick={
                    () => {
                      setDarkMode(!darkMode);
                      changeTheme(darkMode ? themes.light : themes.dark);
                    }
                  }>
                    {darkMode ? "🌚" : "🌝"}
                  </span>
                  )}
              </ThemeContext.Consumer>

            </li>
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
                <a href="https://blog.emmanuelrobinson.dev/" target="_blank" rel="noreferrer">blog</a>
            </li>
            <li>
              <Link href="/resume" passHref>
                <a>resume</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
