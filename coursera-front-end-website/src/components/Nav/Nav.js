import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../images/Logo.svg";
import navStyle from './Nav.module.css';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={navStyle.nav}>
            <Link to="/booking-a-table-on-the-little-lemon-website-react">
                <img src={HeaderLogo} alt="logo" className={navStyle.logo} />
            </Link>

            <button className={navStyle.menuToggle} onClick={toggleMobileMenu}>
                ☰
            </button>

            <div className={`${navStyle.navList} ${isMobileMenuOpen ? navStyle.open : ''}`}>
                <ul>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react">Home</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/about">About</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/order-online">Order online</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;

