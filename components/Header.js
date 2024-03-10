import Link from 'next/link';
import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <div>
    <nav id="gnav">
        <ul>
          <li><Link href="/">HOME</Link></li>
          <li><ScrollLink to="Profile" spy={true} smooth={true} duration={500} className="link">PROFILE</ScrollLink></li>
          <li><ScrollLink to="skill" spy={true} smooth={true} duration={500} className="link">SKILL</ScrollLink></li>
          <li><ScrollLink to="product" spy={true} smooth={true} duration={500} className="link">PRODUCT</ScrollLink></li>
          <li><ScrollLink to="awards" spy={true} smooth={true} duration={500} className="link">AWARD</ScrollLink></li>
          <li><ScrollLink to="note" spy={true} smooth={true} duration={500} className="link">NOTE</ScrollLink></li>
          {/* <li><ScrollLink to="paper" spy={true} smooth={true} duration={500} className="link">PAPER</ScrollLink></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;