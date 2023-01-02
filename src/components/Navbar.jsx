import React from "react";
import Logo from "../design/Logo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <NavLink to="/"><img src={Logo} alt="AMM Logo" className="nav__logo" /></NavLink>
            <div className="nav__links">
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "nav__links--active" : "nav__links--inactive"}>Home
                </NavLink>
                <NavLink to="/artists" className={({ isActive }) =>
                isActive ? "nav__links--active" : "nav__links--inactive"}>Artists
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "nav__links--active" : "nav__links--inactive"}>Contact
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar