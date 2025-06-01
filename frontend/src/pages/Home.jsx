import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "../App.css";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";
import { useState } from "react";



export const Home = () => {
  const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
    });
  const { isLoggedIn } = useAuth();
  const { storeTokenInLS } = useAuth();
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // const response = await fetch("http://localhost:5000/api/auth/google", {
        //   method: "GET",
         
        // });
        // Inside your handleSubmit (or an onClick handler), simply:
window.location.href = "http://localhost:5000/api/auth/google";

  
       
      } catch (error) {
          console.log(error);
      }
  
    };

  return (
    <>
      <div className="header-container">
        <header className="rounded-header">
          <div className="header-top">
            <div className="logo">CleanClick</div>
            {!isLoggedIn ? (
              <>
                <div className="btns">
                  <Link to="/login">
                    <button className="btn-login">Log in</button>
                  </Link>

                  <Link to="/register">
                    <button className="btn-join">Join</button>
                  </Link>
                </div>
              </>
            ) : (
              <Link to="/logout">
                <button className="btn-login">Log Out</button>
              </Link>
            )}
          </div>
        </header>

        <div className="nav-bar">
          <div className="nav-left">
            <a href="#about">
              <button>about</button>
            </a>
            <a href="#partner">
              <button>become a partner</button>
            </a>
            <a href="#invest">
              <button>invest</button>
            </a>
          </div>
          <div className="nav-right">
            <a href="#contact_us">
              <button>contact</button>
            </a>
          </div>
        </div>
      </div>

      <section className="hero">
        <h1>clean living starts here</h1>
        <p>
          the platform for <em>clean</em> fashion, beauty, and wellness.
        </p>
      </section>

      <section className="grid-gallery">
        <div className="div1">
          <img src="bag.jpg" alt="shop" />
        </div>
        <div className="div2">
          <img src="cream.jpg" alt="discover" />
        </div>
        <div className="div3">
          <img src="dress.jpg" alt="watch" />
        </div>
        <div className="div4">
          <img src="jewel.jpg" alt="learn" />
        </div>
        <div className="div5">
          <img src="dress.jpg" alt="clean" />
        </div>
        <div className="div6">
          <img src="jeans.jpg" alt="denim" />
        </div>
        <div className="div7">
          <img src="invest.jpg" alt="eco" />
        </div>
        <div className="div8">
          <img src="dress.jpg" alt="vibe" />
        </div>
        <div className="div9">
          <img src="cream.jpg" alt="shine" />
        </div>
      </section>

      <section className="signup">
        <h2>create a profile</h2>
        <p>
          the first 1000 sign ups receive free perks and benefits for life
          including product discounts, exclusive content, first access to
          events* and more
        </p>
        
    
        <button onClick={handleSubmit} className="signup-btn google">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />
          Sign in with Google
        </button>
        <button className="signup-btn facebook">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            alt="Facebook"
          />
          Sign in with Facebook
        </button>
        <button className="signup-btn apple">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
            alt="Apple"
          />
          Sign in with Apple
        </button>
        <p>*London and New York only</p>
      </section>

      <section className="about-section" id="about">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="about_vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-content">
          <h2>about us</h2>
          <p>
            We’re a London and New York based team on a mission to making
            conscious living a subconscious choice. After launching CleanTV -
            our video channel showcasing innovation, circularity and
            sustainability in fashion - we’ve taken everything we’ve learned to
            build CleanClick. Our new platform makes it even easier for you to
            discover clean brands, creators, shop mindfully, and live more
            intentionally - without the overwhelm. Create a cleaner lifestyle,
            one click at a time.
          </p>
        </div>
      </section>

      <section className="partner-section" id="partner">
        <div className="partner-container">
          <img src="jeans.jpg" alt="Partner Image" className="partner-img" />
          <div className="partner-text">
            <h2>become a partner</h2>
            <p>
              Reach a fast-growing community of conscious consumers who care
              about what they buy – and why. As a brand partner, you’ll amplify
              your impact, grow with purpose, and help shape a cleaner,
              healthier future for people and our planet.
            </p>
          </div>
        </div>
      </section>

      <section className="invest-section" id="invest">
        <div className="invest-container">
          <div className="invest-text">
            <h2>invest in us</h2>
            <p>
              Clean living isn’t a trend—it’s the future. And we’re building the
              platform to power it. Back a bold vision, a growing movement, and
              a kickass team that’s all in.
            </p>
            <p>Let’s create real change, together.</p>
            <p>
              <strong>invest@cleanclick.com</strong>
            </p>
          </div>
          <img src="invest.jpg" alt="Dolphin Image" className="invest-img" />
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <p>
            <strong>Press:</strong>
            <br />
            For media enquiries, press kits, interviews, or features, get in
            touch at <br />
            <span>press@cleanclick.com</span>
          </p>
          <p>
            <strong>Contact:</strong>
            <br />
            For questions, collaborations, or just to say hi, reach out to us at{" "}
            <br />
            <span>hello@cleanclick.com</span>
          </p>
        </div>
        <div className="footer-bottom" id="contact_us">
          <div className="social-icons">
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <p>&copy; copyright CleanClick 2025</p>
        </div>
      </footer>
    </>
  );
};
