import React from 'react'
import './Invest.css'

const Invest = () => {
  return (
    <section className="invest-form">
      <div className="invest-bubble">
        <p>
          <em>If you're interested in investing in CleanClick</em>
          <br />
          we’d love to hear from you.
        </p>
      </div>
      <form className="invest-contact">
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="email" required />
        <input type="url" placeholder="website (optional)" />
        <input type="url" placeholder="Linkedin (optional)" />
        <textarea rows="4" placeholder="message (optional)" />
        <button type="submit">send</button>
      </form>
    </section>
  );
}

export default Invest;
