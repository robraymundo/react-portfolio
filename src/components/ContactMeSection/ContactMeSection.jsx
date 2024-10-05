import "./ContactMeSection.css";
import React, { useState } from "react";

function ContactMeSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-section" id="contact">
      <form className="contact-section__form" onSubmit={handleSubmit}>
        <h1 className="contact-section__heading">Contact me</h1>
        <input
          className="contact-section__input"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <input
          className="contact-section__input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <textarea
          className="contact-section__textarea"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />

        <button className="contact-section__button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMeSection;