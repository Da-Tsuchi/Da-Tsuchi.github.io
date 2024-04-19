import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css"

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="MSW7uAvAq4_hq6ioPiOafVkmWwx1707GizVeYUajhik" />
      </Head>
      <title>土田 裕登</title>
      <Header />
      <main className="main">{children}</main> 
      <Footer className="footer" />
    </div>
  );
}