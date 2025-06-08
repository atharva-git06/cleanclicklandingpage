import React from 'react'
import './Partner.css'

const Partner = () => {
  return (
    <>
      <section className="partner-form">
        <div className="partner-bubble">
          <p>
            <em>
              If you’re a clean fashion, beauty, or wellness brand,
              <br />
              company or creator and we haven’t found you yet,
              <br />
              please get in touch with us!
            </em>
            <br />
          </p>
        </div>
        <form className="partner-contact">
          <input type="text" placeholder="name" required />
          <input type="text" placeholder="brand/company name" required />
          <input type="email" placeholder="email" required />
          <input type="url" placeholder="website (optional)" />
          <input type="url" placeholder="socials" />
          <textarea rows="4" placeholder="message (optional)" />
          <button type="submit">send</button>
        </form>
      </section>
    </>
  )
}

export default Partner
