import React, { useState } from 'react';
import './Invest.css';
import { toast } from 'react-toastify';
import { Navbar } from '../../components/NavbarComponent/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
      <section className="invest-form-body">
        <Navbar/>
        <Header/>
        <div className="invest-section">
  <h3>Invest in us</h3>
  <p>
    CleanClick is where impact meets opportunity—<br />
    the intersection of tech, community, and conscious commerce.
  </p> <br />
  <p>
    We invite mission-aligned investors to help us scale this movement, to<br />
    shape a cleaner, brighter future for generations to come.
  </p> <br />
  <p>Get in touch to explore our deck and next steps.</p>
  <p className="invest-email"><strong>hello@cleanclick.com</strong></p>
</div>

      </section>
      <Footer/>
    </>
  );
};

export default Invest;