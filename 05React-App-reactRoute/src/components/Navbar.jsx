import {NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "link-active" : "link")}
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
