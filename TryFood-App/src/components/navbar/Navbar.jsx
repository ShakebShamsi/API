import { Link, useLocation } from 'react-router-dom';
import {
   Home,
   BadgeInfo,
   MapPinHouse,
   User,
   ShoppingCart,
   MapPin,
   ChevronDown,
   Menu,
   X,
} from 'lucide-react';

import { useSelector } from 'react-redux';
import { useState } from 'react';

import './Navbar.css';

function Navbar() {
   const location = useLocation();
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const cartItems = useSelector((store) => store.cart.items);

   const cartCount = cartItems.length;

   const isActive = (path) => {
      return location.pathname === path;
   };

   const closeMobileMenu = () => {
      setMobileMenuOpen(false);
   };

   return (
      <header className="navbar">
         <div className="navbar-container">

            {/* ================= LOGO ================= */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
               <span className="logo-main">Try</span>
               <span className="logo-accent">Food</span>
            </Link>


            {/* ================= LOCATION ================= */}
            <div className="navbar-location">
               <MapPin size={18} />

               <div className="location-text">
                  <span className="location-title">Delivering to</span>
                  <span className="location-name">
                     Your Location
                     <ChevronDown size={14} />
                  </span>
               </div>
            </div>


            {/* ================= DESKTOP NAV ================= */}
            <nav className="navbar-nav">

               <Link
                  to="/"
                  className={isActive('/') ? 'nav-link active' : 'nav-link'}
               >
                  <Home size={19} />
                  <span>Home</span>
               </Link>

               <Link
                  to="/about"
                  className={
                     isActive('/about')
                        ? 'nav-link active'
                        : 'nav-link'
                  }
               >
                  <BadgeInfo />
                  <span className="nav-text">About</span>
               </Link>

               <Link
                  to="/contact"
                  className={
                     isActive('/contact')
                        ? 'nav-link active'
                        : 'nav-link'
                  }
               >
                  <MapPinHouse />
                  <span className="nav-text">Contact</span>
               </Link>

               <Link
                  to="/profile"
                  className={
                     isActive('/profile')
                        ? 'nav-link active'
                        : 'nav-link'
                  }
               >
                  <User size={19} />
                  <span>Profile</span>
               </Link>

               <Link
                  to="/cart"
                  className={
                     isActive('/cart')
                        ? 'nav-link cart-link active'
                        : 'nav-link cart-link'
                  }
               >
                  <div className="cart-icon-wrapper">
                     <ShoppingCart size={21} />

                     {cartCount > 0 && (
                        <span className="cart-badge">
                           {cartCount}
                        </span>
                     )}
                  </div>

                  <span>Cart</span>
               </Link>

            </nav>


            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
               className="mobile-menu-button"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               aria-label="Toggle menu"
            >
               {mobileMenuOpen ? (
                  <X size={24} />
               ) : (
                  <Menu size={24} />
               )}
            </button>

         </div>


         {/* ================= MOBILE MENU ================= */}
         <div
            className={
               mobileMenuOpen
                  ? 'mobile-menu open'
                  : 'mobile-menu'
            }
         >

            <Link
               to="/"
               className={isActive('/') ? 'mobile-nav-link active' : 'mobile-nav-link'}
               onClick={closeMobileMenu}
            >
               <Home size={19} />
               <span>Home</span>
            </Link>

            <Link
               to="/about"
               className={
                  isActive('/about')
                     ? 'mobile-nav-link active'
                     : 'mobile-nav-link'
               }
               onClick={closeMobileMenu}
            >
               <span>About</span>
            </Link>

            <Link
               to="/contact"
               className={
                  isActive('/contact')
                     ? 'mobile-nav-link active'
                     : 'mobile-nav-link'
               }
               onClick={closeMobileMenu}
            >
               <span>Contact</span>
            </Link>

            <Link
               to="/profile"
               className={
                  isActive('/profile')
                     ? 'mobile-nav-link active'
                     : 'mobile-nav-link'
               }
               onClick={closeMobileMenu}
            >
               <User size={19} />
               <span>Profile</span>
            </Link>

            <Link
               to="/cart"
               className={
                  isActive('/cart')
                     ? 'mobile-nav-link active'
                     : 'mobile-nav-link'
               }
               onClick={closeMobileMenu}
            >
               <div className="mobile-cart-icon">
                  <ShoppingCart size={20} />

                  {cartCount > 0 && (
                     <span className="cart-badge">
                        {cartCount}
                     </span>
                  )}
               </div>

               <span>Cart</span>
            </Link>

         </div>
      </header>
   );
}

export default Navbar;
