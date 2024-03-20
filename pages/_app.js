import '../styles/globals.css';
import Layout from '../components/Layout';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';
import AOS from 'aos';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 400, 
      once: true, // アニメーションを一度だけ実行
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
      
  );
}

export default MyApp;