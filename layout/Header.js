"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { noxfolioUtilits } from "@/utility";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    noxfolioUtilits?.stickyNav?.();
  }, []);

  return (
    <header className="main-header header-two menu-absolute">
      <div className="header-upper">
        <div className="container container-1620">
          <div className="header-inner">

            {/* Logo */}
            <div className="logo-outer">
              <Link href="/">
                <img
                  src="/assets/images/logos/logo.png"
                  alt="Logo"
                  className="logo-img"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className={`main-menu ${toggle ? "show" : ""}`}>
              <ul className="navigation onepage">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            {/* Right Button */}
            <div className="header-btn">
              <a href="#contact" className="theme-btn">
                Let’s Talk
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setToggle(!toggle)}
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
