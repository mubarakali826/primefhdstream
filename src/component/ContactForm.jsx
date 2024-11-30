import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_f7jbhbd"; // Replace with your Service ID
    const templateID = "template_4wmkceg"; // Replace with your Template ID
    const publicKey = "lBFyL7ulfFaBlTSYP"; // Replace with your Public Key

    // Template parameters
    const templateParams = {
      to_name: "IPTV", // Recipient (you or your organization)
      from_name: formData.from_name, // Sender's name
      email: formData.email, // Sender's email
      subject: formData.subject, // Subject of the email
      message: formData.message, // Message content
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatusMessage("Your message has been sent!");
        setFormData({ from_name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatusMessage("Failed to send your message. Please try again.");
      });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
