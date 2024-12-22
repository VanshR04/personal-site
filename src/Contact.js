import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from 'react-intersection-observer';
import "./Contact.css";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation to repeat when scrolled back into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_5g5x7ju", // Replace with your EmailJS Service ID
        "template_obyfeee", // Replace with your EmailJS Template ID
        form.current,
        "meh3UygFlmxqthlLZ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log(error);
          setMessage("Failed to send the message. Please try again.");
        }
      );
  };
  

  return (
    <>
    <div ref={ref} className="intro-screen-c">
        {inView && (
          <motion.div
            className="intro-text-c"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Let's Collaborate", 1500,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity} // Infinite loop
            />
          </motion.div>
        )}
      </div>
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Me</h2>
      {message && <p className="contact-form-message">{message}</p>}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name" className="contact-form-label">Name</label>
        <input
          type="text"
          name="from_name"
          id="user_name"
          className="contact-form-input"
          required
        />

        <label htmlFor="user_email" className="contact-form-label">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="contact-form-input"
          required
        />

<label htmlFor="user_phone" className="contact-form-label">Phone Number</label>
  <input
    type="tel"
    name="user_phone"
    id="user_phone"
    className="contact-form-input"
    required
  />

        <label htmlFor="message" className="contact-form-label">Message</label>
        <textarea
          name="message"
          id="message"
          className="contact-form-textarea"
          required
        ></textarea>

        <button type="submit" className="contact-form-button">Send</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
