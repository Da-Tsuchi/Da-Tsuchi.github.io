// import Link from 'next/link';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <footer id="footer">
      <div class="inner">
        <nav class="footer-link">
          <ul>
          <li><Link to="Profile" spy={true} smooth={true} duration={500} className="link">PROFILE</Link></li>
          <li><Link to="skill" spy={true} smooth={true} duration={500} className="link">SKILL</Link></li>
          <li><Link to="product" spy={true} smooth={true} duration={500} className="link">PRODUCT</Link></li>
          <li><Link to="awards" spy={true} smooth={true} duration={500} className="link">AWARD</Link></li>
          </ul>
        </nav>
        <p class="copyright">Copyright&copy;Hiroto Tsuchida. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Header;