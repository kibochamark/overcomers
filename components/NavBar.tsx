"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaHandHoldingHeart,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    // On small screens, toggle the specific dropdown
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const closeMenus = () => {
    setMobileMenu(false);
    setMobileDropdown(null);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LEFT LOGO */}
        <div className="nav-left">
          <img src="/Logo_3-removebg-preview.png" alt="OCI Logo" className="logo-image" />
          <Link href="/" className="logo-text" onClick={closeMenus}>
            OVERCOMERS CHAPEL INTERNATIONAL
          </Link>
        </div>

        {/* MOBILE TOGGLE - Swaps icons based on state */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Menu"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV */}
        <nav className={`nav-right ${mobileMenu ? "open" : ""}`}>
          <Link href="/" className="nav-link" onClick={closeMenus}>
            Home
          </Link>

          {/* CONNECT */}
          <div className="nav-item">
            <div
              className="nav-label"
              onClick={() => toggleMobileDropdown("connect")}
            >
              <span className="nav-link">Connect</span>
              <FaChevronDown
                className={`mobile-arrow ${
                  mobileDropdown === "connect" ? "rotated" : ""
                }`}
              />
            </div>

            <ul
              className={`dropdown ${
                mobileDropdown === "connect" ? "mobile-show" : ""
              }`}
            >
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  New Here
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Life Groups
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Prayer Request
                </Link>
              </li>
            </ul>
          </div>

          {/* EVENTS */}
          <div className="nav-item">
            <div
              className="nav-label"
              onClick={() => toggleMobileDropdown("events")}
            >
              <span className="nav-link">Events</span>
              <FaChevronDown
                className={`mobile-arrow ${
                  mobileDropdown === "events" ? "rotated" : ""
                }`}
              />
            </div>

            <ul
              className={`dropdown ${
                mobileDropdown === "events" ? "mobile-show" : ""
              }`}
            >
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Conferences
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Youth Events
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Worship Nights
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Church Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="nav-item">
            <div
              className="nav-label"
              onClick={() => toggleMobileDropdown("about")}
            >
              <span className="nav-link">About</span>
              <FaChevronDown
                className={`mobile-arrow ${
                  mobileDropdown === "about" ? "rotated" : ""
                }`}
              />
            </div>

            <ul
              className={`dropdown ${
                mobileDropdown === "about" ? "mobile-show" : ""
              }`}
            >
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  Beliefs
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" onClick={closeMenus}>
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* GIVE */}
          <Link
            href="/coming-soon"
            className="nav-link give-btn"
            onClick={closeMenus}
          >
            Give
            <FaHandHoldingHeart className="give-icon" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
