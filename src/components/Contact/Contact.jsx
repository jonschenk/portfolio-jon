import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "bootstrap";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userMessage = form.current.message.value;

    if (!userName || !userEmail || !userMessage) {
      alert("All fields must be filled out");
      return;
    }

    emailjs
      .sendForm("service_dh2eyuq", "template_j9jmzq9", form.current, {
        publicKey: "DDIMZ8f9CJIckzT4M",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED..." + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} id="contact-me">
        <h1>Contact Me &#128640;</h1>
        <label>Name</label>
        <input type="text" name="user_name" id="input-name" />
        <label>Email</label>
        <input type="email" name="user_email" id="input-email"/>
        <label>Message</label>
        <textarea name="message" id="input-message"/>
        <input type="submit" value="Send" id="send-email-button"/>
      </form>
    </div>
  );
};