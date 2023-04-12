import React, { useContext, useEffect } from "react";
import "./header.css";
import { GlobalContext } from "../../utils/Context";
import HotelLogo from "../../assets/image.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { setMenuOpen, menuOpen } = useContext(GlobalContext);

  const user = JSON.parse(localStorage.getItem("user"));

  const getFirstName = (name) => {
    let names = name.split(" ");
    if (names.length > 0) return names[0];
    else return name;
  };

  return (
    <div className="hh">
      {user && (
        <div className="collection">
          <Link to="/">
            <img src={HotelLogo} alt="/" />
          </Link>
          <div className="navbar">
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="home" to="/bookings">
              Bookings
            </Link>
          </div>
          <div
            class={`user-name ${menuOpen ? "close-icon" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Hello, {getFirstName(user.name)}&nbsp;&nbsp;
            <div
              class={`menu-icon ${menuOpen ? "close-icon" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div class="leftright"></div>
              <div class="rightleft"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
