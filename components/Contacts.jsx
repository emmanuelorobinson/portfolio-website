import React from "react";

const Contacts = () => {
  return (
    <section className="contact-section" id="contacts">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p>
          {
            "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
          }
        </p>

        <button>
          <a href="mailto:emmanueloerobinson@gmail.com">
            Say Hello
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contacts;
