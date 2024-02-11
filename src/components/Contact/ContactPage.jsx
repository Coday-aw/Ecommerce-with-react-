import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (message === "") {
      alert("Please enter your message.");
      return;
    }

    axios
      .post("https://js2-ecommerce-api.vercel.app/api/messages", {
        name,
        email,
        message,
      })
      .then((response) => {
        console.log(response.data);
        // Clear the input fields
        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you for your massage!");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactPage;
