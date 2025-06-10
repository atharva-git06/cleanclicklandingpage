import React, { useState } from "react";
import "./Partner.css";
import { toast } from "react-toastify";

const Partner = () => {
  // Define the state for form fields
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    website: "",
    socials: "",
    message: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform form validation or data submission
    try {
      const response = await fetch("http://localhost:5000/api/messages/partnerMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Your request has been sent!");
        // Reset the form
        setFormData({
          name: "",
          companyName: "",
          email: "",
          website: "",
          socials: "",
          message: "",
        });
      } else {
        toast.error(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
      <section className="partner-form">
        <div className="partner-bubble">
          <p>
            <em>
              If you’re a clean fashion, beauty, or wellness brand,
              <br />
              company, or creator and we haven’t found you yet,
              <br />
              please get in touch with us!
            </em>
          </p>
        </div>

        <form className="partner-contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Brand/Company name"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            //type="url"
            name="website"
            placeholder="Website (require)"
            value={formData.website}
            onChange={handleInputChange}
            required
          />
          <input
            //type="url"
            name="socials"
            placeholder="Socials"
            value={formData.socials}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default Partner;