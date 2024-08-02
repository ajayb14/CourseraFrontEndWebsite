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
            <Link to="/" className={navStyle.logoLink}>
                <img src={HeaderLogo} alt="logo" className={navStyle.logo} />
            </Link>

            <button className={navStyle.menuToggle} onClick={toggleMobileMenu}>
                ☰
            </button>

            <div className={`${navStyle.navList} ${isMobileMenuOpen ? navStyle.open : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order-online">Order online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;



