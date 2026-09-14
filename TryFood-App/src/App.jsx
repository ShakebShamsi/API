import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';



const App = () => {
   return (
      <div className="app">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default App;
