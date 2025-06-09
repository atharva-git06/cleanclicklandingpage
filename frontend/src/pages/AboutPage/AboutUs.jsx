import React from "react";
import './AboutUs.css'
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

export const AboutUs = () => {
  const { isLoggedIn } = useAuth();

  const handleSubmitWithGoogle = async (e) => {


    if(isLoggedIn){
          toast.success('Your are already logged in')
        }
        else{
          try {
            window.location.href = "http://localhost:5000/api/auth/google";
          } catch (error) {
            console.log(error);
          }
        }
  };

  return (
    <>
      <section className="main_des">
        <h1>
          on a mission to make <em>conscious living</em> a subconscious choice
        </h1>
        <div className="about-text">
  <p>We’re a London/New York-based team building a community-led AI powered platform.</p>
  <p>Like you, we got tired of the greenwashing, the endless scrolling, and the overwhelm to find things that actually align with our values and lifestyle.</p>
  <p>So we set out to build a space where discovering a cleaner life is easy, inspiring, and fun.</p>
  <p>It started with CleanTV, our video channel spotlighting innovation, circularity, and sustainability in fashion. We got to know designers, founders, CEOs, and changemakers shaping a cleaner future — and their stories sparked something bigger.</p>
  <p>Enter CleanClick: a new kind of platform that makes it effortless to find clean brands, connect with conscious creators, and shop with intention.</p>
  <p><strong>No preaching. No perfection. Just a cleaner lifestyle, one click at a time.</strong></p>
</div>

      </section>

      <section className="signup-box">
        <h2>Create a profile</h2>
        <p>
          The first 1000 sign-ups receive free perks and benefits for life -
          including product discounts, exclusive content, first access to events,
          and more.
        </p>
        <button  onClick={handleSubmitWithGoogle} className="signup-btn google">
          <i className="fab fa-google"></i> Sign in with Google
        </button>
        <button className="signup-btn facebook">
          <i className="fab fa-facebook-f"></i> Sign in with Facebook
        </button>
        <button className="signup-btn apple">
          <i className="fab fa-apple"></i> Sign in with Apple
        </button>
      </section>
    </>
  );
};

