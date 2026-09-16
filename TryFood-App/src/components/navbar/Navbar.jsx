import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
   Home,
   Info,
   Phone,
   ShoppingCart,
   LogIn,
   LogOut,
} from 'lucide-react';

import './Navbar.css';

const Navbar = () => {
   const [btnNameReact, setBtnNameReact] = useState('Login');
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
                        <Icon size={18} strokeWidth={2} />
                        <span>{label}</span>
                     </Link>
                  </li>
               ))}

               {/* Login / Logout */}
               <li>
                  <button
                     className="loginBtn"
                     onClick={() =>
                        setBtnNameReact((prev) =>
                           prev === 'Login' ? 'Logout' : 'Login'
                        )
                     }
                  >
                     {btnNameReact === 'Login' ? (
                        <LogIn size={18} strokeWidth={2} />
                     ) : (
                        <LogOut size={18} strokeWidth={2} />
                     )}

                     <span>{btnNameReact}</span>
                  </button>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
