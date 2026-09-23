import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';




const App = () => {
   return (
      <Provider store={appStore}>
         <div className="app">
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
         </div>
      </Provider>
   );
};

export default App;
