import React from "react";

const Contacts = () => {
  return (
    <section className="contact-section" id="contacts">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <p>
          {
            "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
          }
        </p>

        <a href="mailto:emmanueloerobinson@gmail.com">Say Hello</a>
      </div>
    </section>
  );
};

export default Contacts;
