// import Link from 'next/link';
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div>
    <header id="header">
      <h1 className="logo">
        {/* <span className="logo-title">Tsuchida Hiroto</span> */}
      </h1>
    </header>
    <nav id="gnav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="Profile" spy={true} smooth={true} duration={500} className="link">PROFILE</Link></li>
          <li><Link to="skill" spy={true} smooth={true} duration={500} className="link">SKILL</Link></li>
          <li><Link to="product" spy={true} smooth={true} duration={500} className="link">PRODUCT</Link></li>
          <li><Link to="awards" spy={true} smooth={true} duration={500} className="link">AWARD</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;