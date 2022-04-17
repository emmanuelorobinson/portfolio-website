import React, {useRef, useEffect} from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const Contacts = () => {

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <div>
      <div>
        <h1>Get In Touch</h1>
        <p>
          {
            "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
          }
        </p>

        <button>
          <a href="mailto:emmanueloerobinson@gmail.com"></a>
        </button>
      </div>
    </div>
  );
};

export default Contacts;
