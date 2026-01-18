"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer bgc-black pt-80 pb-40">
      <div className="container text-center">
        <img
          src="/assets/images/logos/logo.png"
          alt="Logo"
          width={120}
        />

        <ul className="footer-nav mt-30">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p className="mt-30">
          © {year} Graphic Designer Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
