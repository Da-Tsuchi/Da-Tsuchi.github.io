// components/Navbar.js
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('gnav');
      if (window.scrollY > 100) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // クリーンアップ関数
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
}

export default Navbar;