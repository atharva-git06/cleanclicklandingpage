import React, { useState } from 'react';
import './Invest.css';
import { toast } from 'react-toastify';

const Invest = () => {
  // Define the state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    linkedin: '',
    message: '',
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
      const response = await fetch('http://localhost:5000/api/messages/investMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Your investment inquiry has been sent!');
        // Reset the form
        setFormData({
          name: '',
          email: '',
          website: '',
          linkedin: '',
          message: '',
        });
      } else {
        toast.error(data.message || 'An error occurred.');
      }
    } catch (err) {
      console.error(err);
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <>
      <section className="invest-form">
        <div className="invest-bubble">
          <p>
            <em>If you're interested in investing in CleanClick</em>
            <br />
            we’d love to hear from you.
          </p>
        </div>

        <form className="invest-contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
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
           // type="url"
            name="website"
            placeholder="Website (optional)"
            value={formData.website}
            onChange={handleInputChange}
          />
          <input
            //type="url"
            name="linkedin"
            placeholder="LinkedIn (optional)"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default Invest;