import { useState } from 'react';

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
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
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
