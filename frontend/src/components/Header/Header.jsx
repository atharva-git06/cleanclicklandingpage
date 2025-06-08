import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="header-container">
      <header className="rounded-header">
        <div className="header-top">
          <NavLink to="/" className="logo">
            CleanClick
          </NavLink>
          {!isLoggedIn ? (
            <>
              <div className="btns">
                <NavLink to="/register">
                  <button className="btn-create_a_profile">
                    Create a Profile
                  </button>
                </NavLink>

                <NavLink to="/login">
                  <button className="btn-login">Log In</button>
                </NavLink>
              </div>
            </>
          ) : (
            <NavLink to="/logout">
              <button className="btn-login">Log Out</button>
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
