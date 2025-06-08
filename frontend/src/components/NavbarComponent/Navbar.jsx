import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-left">
        <li>
          <NavLink to="/">
            <button>About</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/partner">
            {" "}
            <button>Become a Partner</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/invest">
            {" "}
            <button>Invest</button>
          </NavLink>
        </li>
      </ul>

      <ul className="nav-right">
        <li>
          <NavLink to="/contactUs">
            {" "}
            <button>Contact</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
