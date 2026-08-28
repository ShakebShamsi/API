import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   //   let btnName = 'Login';

   const [btnNameReact, setBtnNameReact] = useState('Login');
   console.log('navbar render');

   return (
      <div className="header">
         <div className="logo-container">
            <img src='../../../logo.png' alt="App Logo" className="logo" />
         </div>
         <div className="nav-items">
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About Us</Link>
               </li>
               <li>
                  <Link to="/contact">Contact Us</Link>
               </li>
               <li>
                  <Link to="/cart">Cart</Link>
               </li>

               <button
                  className="loginBtn"
                  onClick={() => {
                     //   btnName = 'Logout';
                     btnNameReact === 'Login'
                        ? setBtnNameReact('Logout')
                        : setBtnNameReact('Login');
                     console.log(btnNameReact);
                  }}
               >
                  {btnNameReact}
               </button>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
