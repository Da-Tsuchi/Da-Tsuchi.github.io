import Header from './Header';
import Footer from './Footer';
import "@fortawesome/fontawesome-svg-core/styles.css"

export default function Layout({ children }) {
  return (
    <div>
      <title>土田 裕登</title>
      <Header />
      <main className="main">{children}</main> 
      <Footer className="footer" />
    </div>
  );
}