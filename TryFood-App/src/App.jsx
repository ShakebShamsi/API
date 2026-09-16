import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';




const App = () => {
   return (
      <div className="app">
         <ScrollToTop />
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default App;
