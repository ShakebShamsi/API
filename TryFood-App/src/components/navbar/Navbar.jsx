import { Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {
   Home,
   Info,
   Phone,
   ShoppingCart,
} from 'lucide-react';

import './Navbar.css';

const Navbar = () => {

   const cartCount = useSelector((store) => store.cart.items.length);

   const location = useLocation();

   const isActive = (path) => location.pathname === path;

   const navItems = [
      { path: '/', label: 'Home', icon: Home },
      { path: '/about', label: 'About Us', icon: Info },
      { path: '/contact', label: 'Contact Us', icon: Phone },
      { path: '/cart', label: 'Cart', icon: ShoppingCart },
   ];

   return (
      <header className="header">

         {/* Logo */}
         <div className="logo-container">
            <Link to="/" className="logo-link">
               <img
                  src="../../../logo.png"
                  alt="App Logo"
                  className="logo"
               />
            </Link>
         </div>

         {/* Navigation */}
         <nav className="nav-items">
            <ul>
               {navItems.map(({ path, label, icon: Icon }) => (
                  <li key={path}>
                     <Link
                        to={path}
                        className={isActive(path) ? 'active' : ''}
                     >
                        <div className="cart-icon-wrapper">
                           <Icon size={18} strokeWidth={2} />

                           {/* Cart Count */}
                           {path === '/cart' && cartCount > 0 && (
                              <span className="cart-badge">
                                 {cartCount}
                              </span>
                           )}
                        </div>

                        <span>{label}</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
