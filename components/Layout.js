import Header from './Header';
import Footer from './Footer';
import "@fortawesome/fontawesome-svg-core/styles.css"
import TypingAnimation from '../components/TypingAnimation';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <main className="main">{children}</main> 
      <Footer className="footer" />
    </div>
  );
}