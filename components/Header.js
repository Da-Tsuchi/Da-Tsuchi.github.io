import Link from 'next/link';
import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <div>
    <nav id="gnav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><ScrollLink to="Profile" spy={true} smooth={true} duration={500} className="link">Profile</ScrollLink></li>
          <li><ScrollLink to="skill" spy={true} smooth={true} duration={500} className="link">Skill</ScrollLink></li>
          <li><ScrollLink to="product" spy={true} smooth={true} duration={500} className="link">Product</ScrollLink></li>
          <li><ScrollLink to="pub" spy={true} smooth={true} duration={500} className="link">Publication</ScrollLink></li>
          <li><ScrollLink to="awards" spy={true} smooth={true} duration={500} className="link">Award</ScrollLink></li>
          <li><ScrollLink to="note" spy={true} smooth={true} duration={500} className="link">Note</ScrollLink></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Header;