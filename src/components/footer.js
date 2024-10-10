// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <p>© {year} Why Apps</p>
    </footer>
  );
};

const year = new Date().getFullYear();

export default Footer;
