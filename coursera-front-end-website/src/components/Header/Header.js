import React from "react";
import bannerImg from "../../images/restauranfood.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </a>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Restaurant food" />
        </div>
      </section>
    </header>
  );
};

export default Header;

