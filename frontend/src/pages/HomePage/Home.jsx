import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "./Home.css";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const avatars = [
  { img: "/images/@matchaqueen.png", alt: "@matchaqueen" },
  { img: "/images/@bradley2000.png", alt: "@bradley2000" },
  { img: "/images/@eatplaysleep.png", alt: "@eatplaysleep" },
  { img: "/images/@conscious_cass.png", alt: "@conscious_cass" },
  { img: "/images/@earthymamma.png", alt: "@earthymamma" },
  { img: "/images/@flowerchild95.png", alt: "@flowerchild95" },
];

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
        <h1>clean living starts here</h1>
        <p>
          The platform for <em>clean</em> fashion, beauty, and wellness.
        </p>
      </section>

      <section className="grid-gallery">
        <div className="div1">
          <img src="/images/img1.png" alt="shop" />
        </div>
        <div className="div2">
          <img src="/images/img2.png" alt="discover" />
        </div>
        <div className="div3">
          <img src="/images/img3.png" alt="watch" />
        </div>
        <div className="div4">
          <img src="/images/img4.png" alt="learn" />
        </div>
        <div className="div5">
          <video autoPlay muted loop playsInline>
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="div6">
          <img src="/images/img6.jpg" alt="denim" />
        </div>
        <div className="div7">
          <img src="/images/img7.png" alt="eco" />
        </div>
        <div className="div8">
          <img src="/images/img8.png" alt="vibe" />
        </div>
        <div className="div9">
          <img src="/images/img9.png" alt="shine" />
        </div>
        <div className="label-left">shop</div>
        <div className="label-right">connect</div>
      </section>

      <section className="community">
        <div className="hero-heading-wrapper">
          <h2 className="hero-heading">
            we're a <span id="community-led" className="italic">community-led</span>
            <br />
            <strong class="AI-powered">AI-powered platform for</strong>
            <br />
            <span id="clean-living" className="italic">clean living.</span>
          </h2>
          <img src="/images/spark.png" alt="sparkle" className="sparkle-icon" />
        </div>
      </section>

      <div className="category-wrapper">
        <div className="curved-heading">
          <svg viewBox="0 0 500 150" className="curved-text">
            <path
              id="curvePath"
              d="M100,150 A150,150 0 0,1 400,150"
              fill="transparent"
            />
            <text>
              <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                where to first?
              </textPath>
            </text>
          </svg>
        </div>

        <div className="category-circles">
          <div
            className="circle small"
            style={{ backgroundImage: "url('/images/img6.jpg')" }}
          >
            <span>fashion</span>
          </div>
          <div
            className="circle large"
            style={{ backgroundImage: "url('/images/img2.png')" }}
          >
            <span>beauty</span>
          </div>
          <div
            className="circle small"
            style={{ backgroundImage: "url('/images/yoga.png')" }}
          >
            <span>wellness</span>
          </div>
        </div>
      </div>

      <div className="tags">
        <span>thrifting hacks</span>
        <span>how to make matcha</span>
        <span>clean beauty brands</span>
        <span>slow fashion</span>
        <span>managing PCOS</span>
        <span>DIY lip balm</span>
        <span>how does fashion rental work?</span>
        <span>breathwork techniques</span>
      </div>

      <div className="search-wrapper">
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="The best places in London for vintage fashion?"
          />
          <i className="fas fa-microphone mic-icon"></i>
        </div>
      </div>

      <section className="profile-carousel">
  <div className="carousel-wrapper">
    <div className="carousel-content">
      {[...Array(3)].map((_, i) => (
  <div className="avatars" key={i}>
    {avatars.map((avatar, idx) => (
      <div
        className={`avatar ${idx === avatars.length - 1 ? "last-avatar" : ""}`}
        key={`${i}-${idx}`}
      >
        <img src={avatar.img} alt={avatar.alt} />
        <p>{avatar.alt}</p>
      </div>
    ))}
  </div>
))}
    </div>
  </div>
</section>




      <section className="signup-box-home">
        <h2>Create a profile</h2>
        <p>
          The first 1000 sign-ups receive free perks and benefits for life -
          including product discounts, exclusive content, first access to
          events, and more.
        </p>
        <button onClick={handleSubmit} className="signup-btn google">
          <i className="fab fa-google"></i> Sign in with Google
        </button>
        <button className="signup-btn facebook">
          <i className="fab fa-facebook-f"></i> Sign in with Facebook
        </button>
        <button className="signup-btn apple">
          <i className="fab fa-apple"></i> Sign in with Apple
        </button>
      </section>

      <section className="definition">
        <h3>
          clean
          <br />
          <span>/kliːn/</span>
        </h3>
        <p className="part-of-speech">
          <strong>adjective</strong>
        </p>
        <p className="definition-text">
          A new standard for conscious living, describes products and practices
          that are responsibly made, cruelty-free, circular, low waste, and high
          quality.
        </p>
        <p className="example">
          <em>
            You can tell she uses clean skincare products, her skin is glowing!
          </em>
        </p>
      </section>
    </>
  );
};
