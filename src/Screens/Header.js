import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

const Header = ({ location }) => {
  const [show, setshow] = useState(false);

  return (
    <div className="header container">
      <div className="flex-1 responsive-header">
        {/* HAMBURGER MENU FOR MOBILE DEVICES ONLY */}
        <div className="hamburger-menu">
          <div className="flex-1">
            {" "}
            <div className="hamburger-icon">
              <i onClick={() => setshow(!show)} className="fas fa-bars"></i>
            </div>
            <div className="mobile-logo flex">
              <Link to="/">
                <img src="./images/logo2.png" alt="Misters logo" />
              </Link>
            </div>
          </div>
          {show ? (
            <div className="show-menu">
              <div className="mobile-menu">
                <ul className="flex-2">
                  <li>HOME</li>
                  <li>ARYUVEDA</li>
                  <li>BLOG</li>
                  <li>FAQ</li>
                  <li>ABOUT</li>
                </ul>
              </div>
              <div className="mobile-cart">
                <ul className="flex-2">
                  <li>
                    <img src="./images/cart.svg" alt="cart" />
                  </li>
                  <li>
                    <Link to="/login">
                      <img src="./images/user.svg" alt="user" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* CHECK URL TO SHOW "LOGOUT" BUTTON */}
              <div className="mobile-shop-button">
                {location.pathname === "/signup" ||
                location.pathname === "/" ? (
                  <button className="shop">LOGOUT</button>
                ) : (
                  <button className="shop">SHOP</button>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* NAVBAR FOR TABLETS AND PC DEVICES */}
        <div className="logo">
          <Link to="/">
            <img src="./images/logo2.png" alt="Misters logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="flex-1">
            <li>HOME</li>
            <li>ARYUVEDA</li>
            <li>BLOG</li>
            <li>FAQ</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className="cart">
          <ul className="flex-1">
            <li>
              <img src="./images/cart.svg" alt="cart" />
            </li>
            <li>
              <Link to="/login">
                <img src="./images/user.svg" alt="user" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="shop-button">
          {location.pathname === "/signup" || location.pathname === "/" ? (
            <button className="shop">LOGOUT</button>
          ) : (
            <button className="shop">SHOP</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
